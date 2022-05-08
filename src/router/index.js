import VueRouter from "vue-router";

import MyLogin from '../components/MyLogin'

import MyIndex from '../components/MyIndex'

import AnswerAnalysis from '../pages/AnswerAnalysis'

import ExerciseMark from '../pages/ExerciseMark'

import ViewExercise from '../pages/ViewExercise'

import BehaviorAnalysis from '../pages/BehaviorAnalysis'

import ViewExam from '../pages/ViewExam'

const router = new VueRouter({
    routes: [
        // 初始页面为登录页面
        {
            path:'/',
            redirect:'/login'
        },
        // 登录页面
        {
            path: '/login',
            component: MyLogin
        },
        // 主页
        {
            path: '/home',
            component: MyIndex,
            children: [
                // 答题分析
                {
                    path: 'answeranalysis',
                    component: AnswerAnalysis
                },
                // 习题标注
                {
                    path: 'exercisemark',
                    component: ExerciseMark
                },
                // 查看习题
                {
                    path: 'viewexercise',
                    component: ViewExercise
                },
                // 行为分析
                {
                    path: 'behavioranalysis',
                    component: BehaviorAnalysis
                },
                // 查看试卷
                {
                    path: 'viewexam',
                    component: ViewExam
                },
            ]
        },
    ]
})

// 全局前置守卫
// router.beforeEach((from, to, next)=>{})

// 全局后置守卫
// router.afterEach((from, to, next)=>{})

export default router