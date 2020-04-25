import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeIndex from '../views/home/index'

import NewsIndex from '../views/news/index'
import NewsCollege from '../views/news/collegeNews'
import NewsCarousel from '../views/news/carousel'

import Users from '../views/users/user'
import Admin from '../views/users/admin'

import CommunityIndex from '../views/community/index'
import CommunityDetail from '../views/community/detail'

import Settings from '../views/settings/settings'

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: HomeIndex
	},
	{
		path: '/news/index',
		component: NewsIndex
	},
	{
		path: '/news/college',
		component: NewsCollege
	},
	{
		path: '/news/carousel',
		component: NewsCarousel
	},
	{
		path: '/users',
		component: Users
	},
	{
		path: '/admin',
		component: Admin
	},
	{
		path: '/community/index',
		component: CommunityIndex
	},
	{
		path: '/community/detail',
		component: CommunityDetail
	},
	{
		path: '/settings',
		component: Settings
	}
]

const router = new VueRouter({
	routes,
	mode:'history'
})

//3.导出router
export default router