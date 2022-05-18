import http from './http'

// 获取随机要标注的习题
export const getRandomUnmarkedQuestion = () => {
    return http.get('/getRandomUnmarkedQuestion')
} 

// 查询所有试题信息
export const getAllQuestions = (params)=>{
    return http.get('/getAllQuestions',{
        params
    })
}

// 删除试题信息
export const deleteQuestion = (params)=>{
    return http.get('/deleteQuestion',{
        params
    })
}

// 通过标注试题
export const checkQuestion = (params)=>{
    return http.get('/checkQuestion',{
        params
    })
}

