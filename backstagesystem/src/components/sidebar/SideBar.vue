<template>
	<div id="sideBar">
	  <div class="col-sm-2" style="padding-left: 0px;padding-right: 0px;">
	  	<ul class="nav nav-pills nav-stacked" style="background-color: rgb(74, 82, 89);" v-for="(item,index) in first">
	  	  <li role="presentation">
	  	    <a @click="itemClick(index)">
	  	      <span :class="item.img" aria-hidden="true"></span>
	  	      <span>		{{ item.name }}</span>  	  				
	  	    </a>
	  	  </li>		    
	  	</ul>
	  </div>
	</div>
</template>

<script>
	export default{
		name:'SideBar',
		data: function(){
			return{
				first:[
					{
						name:"首页",
						img:"glyphicon glyphicon-home",
						path:"/home"
					},
					{
						name:"资讯管理",
						img:"glyphicon glyphicon-th-list",
						path:"/news/index"
					},
					{
						name:"资讯首页",
						img:"left",
						path:"/news/index"
					},
					{
						name:"院校资讯",
						img:"left",
						path: '/news/college'
					},
					{
						name:"轮播图",
						img:"left",
						path: '/news/carousel'
					},
					{
						name:"用户管理",
						img:"glyphicon glyphicon-user",
						path: '/users'
					},
					{
						name:"用户",
						img:"left",
						path: '/users'
					},
					{
						name:"管理员",
						img:"left",
						path: '/admin'
					},
					{
						name:"社区管理",
						img:"glyphicon glyphicon-comment",
						path: '/community/index'
					},
					{
						name:"社区首页",
						img:"left",
						path: '/community/index'
					},
					{
						name:"社区详情页",
						img:"left",
						path: '/community/detail'
					},
					{
						name:"系统设置",
						img:"glyphicon glyphicon-cog",
						path: '/settings'
					}
				]
			}
		},
		computed:{
			isActive(index){
				
			}
		},
		methods:{
			itemClick:function(index){
				this.$router.push(this.first[index].path);
			}
		}
	}
</script>

<style>
	.left{
		padding-left: 18px;
	}
</style>
