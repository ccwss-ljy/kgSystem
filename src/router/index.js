import VueRouter from "vue-router";

import MyLogin from '../pages/MyLogin' //登录

import MyIndex from '../pages/MyIndex' //主页

import AnswerAnalysis from '../pages/AnswerAnalysis' //答题分析

import ExerciseMark from '../pages/ExerciseMark' //习题标注

import ViewExercise from '../pages/ViewExercise' //查看习题

import BehaviorAnalysis from '../pages/BehaviorAnalysis' //行为分析

import ViewExam from '../pages/ViewExam' //查看试卷

import ExerciseAll from '../pages/ExerciseAll' //所有试题

import ExerciseUnMark from '../pages/ExerciseUnMark' //未标注

import ExerciseMarking from '../pages/ExerciseMarking' //待审核

import ExerciseMarked from '../pages/ExerciseMarked' //审核通过

const router = new VueRouter({
    routes: [
        // 初始页面为登录页面
        {
            path: '/',
            redirect: '/login'
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
                    component: ExerciseMark,
                    props($route){
                        return { 
                            information:$route.query.information, 
                            qType:$route.query.qType,
                            time:$route.query.time,
                            content:$route.query.content
                        }
                    }
                },
                // 查看习题
                {
                    path: 'viewexercise',
                    component: ViewExercise,
                    children: [
                        {
                            path: 'exerciseall',
                            component: ExerciseAll
                        },
                        {
                            path:'exerciseunmark',
                            component: ExerciseUnMark
                        },
                        {
                            path:'exercisemarking',
                            component: ExerciseMarking
                        },
                        {
                            path:'exercisemarked',
                            component: ExerciseMarked
                        }
                    ]
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