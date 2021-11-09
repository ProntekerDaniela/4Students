import MainPage from '@/pages/MainPage'
import AboutE from '@/pages/AboutE'
import MyOffice from '@/pages/MyOffice'
import VueRouter from "vue-router"

const routes = [
    { path: '/', component: MainPage },
    { path: '/aboutE', component: AboutE},
    { path: '/myOffice', component: MyOffice },
]

const router = new VueRouter({routes})

export default router