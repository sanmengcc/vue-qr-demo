import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/Login";

//*导入ptable组件
import ptable from '../components/ptable';
// import Login from "../components/Login";

Vue.use(Router)

export default new Router({
    routes: [
        {
            // 访问根目录时显示ptable组件内容组件内容
            path: '/',
            name:'ptable',
            component: ptable,
        },
        {
            // 访问根目录时显示login组件内容
            path: '/login',
            name:'Login',
            component: Login,
        },
    ]
})
