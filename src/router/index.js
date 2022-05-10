import Vue from 'vue'
import Router from 'vue-router'

//*导入ptable组件
import ptable from '../components/ptable'

Vue.use(Router)

export default new Router({
    routes: [
        {
            // 访问根目录时显示ptable组件内容
            path: '/',
            component: ptable
        },
        {
            // 访问根目录时显示ptable组件内容
            path: '/ptable',
            component: ptable
        }
    ]
})
