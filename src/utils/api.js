import http from './http'


// 登录
export const login = (params)=>{
    return http.get('/login',{
        params
    })
}

// 获取知识点结构
export const getKnowledgePointTree = (params)=>{
    return http.get('/getKnowledgePointTree',{
        params
    })
}

// 提交标注的习题
export const knowledgePointMark = (params)=>{
    return http.get('/knowledgePointMark',{
        params
    })
}

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

// 查询所有测试记录
export const getExamRecord = (params)=>{
    return http.get('/getExamRecord',{
        params
    })
}

// 查询所有答题记录
export const getAnswerRecord = (params)=>{
    return http.get('/getAnswerRecord',{
        params
    })
}

// 查询所有试卷记录
export const getAllExams = (params)=>{
    return http.get('/getAllExams',{
        params
    })
}

