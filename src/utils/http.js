import router from '@/router';
import axios from 'axios';



// 跳转登录页
function toLogin(){
    router.replace({
        path:'/', //跳转到登录页面
        query:{
            redirect:'123' //保存接口之前的页面路径
        }
    })
}


// 错误状态码的处理
function errorHandle(status){
    switch (status) {
        // 没有进行身份认证，需要登录
        case 401:
            console.log('没有认证')
            toLogin();
            break;
        // 拒绝请求，token过期
        case 403:
            console.log('权限过期')
            toLogin();
            break;
        // 请求不存在
        case 404:
            console.log('请求不存在');
            break;
        default:
            console.log('其他错误')
            break;
    }
}

// 创建axios实例
const instance = axios.create({
    timeout: 10000, // 设置请求超时
    baseURL:'http://219.245.19.91:8000' //默认接口路径
})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // post请求头设置



// 请求拦截
instance.interceptors.request.use(
    config => {
        // 每次发送请求之前判断vuex中是否存在token
        // 如果存在，则统一在http请求的header加上token，这样后台根据token判断你的登录情况
        const token = 1; //最后要在vuex里获取，先假设是1
        token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.error(error);
    }
)

// 响应拦截器
instance.interceptors.response.use(
    response =>{
        // 请求成功
        if(response.status === 200){
            return Promise.resolve(response.data)
        }
        // 请求失败抛出错误
        else{
            return Promise.reject(response)
        }
    },
    // 服务器状态码不是2开头的情况
    error => {
        if(error.response.status){
            errorHandle(error.response.status);
            return Promise.reject(error.response);
        }
    }
)

export default instance;