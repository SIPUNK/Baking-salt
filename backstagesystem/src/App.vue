<template>
  <div id="app">
    <top-nav></top-nav>
	<side-bar></side-bar>
	<router-view></router-view>
  </div>
</template>

<script>

import TopNav from "./components/TopNav.vue"
import SideBar from "./components/sidebar/SideBar.vue"

export default {
  name: 'app',
  components: {
	TopNav,
	SideBar
  }
}
</script>

<style>
	
</style>
