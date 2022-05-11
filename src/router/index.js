import Vue from 'vue'
import Router from 'vue-router'
// eslint-disable-next-line no-unused-vars
import Login from "../components/Login";
//*导入ptable组件
// eslint-disable-next-line no-unused-vars
import ptable from '../components/ptable';
// eslint-disable-next-line no-unused-vars
import Index from "@/components/Index";

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/Index',
            name: 'Index',
            component: Index
        },
    ]
})
