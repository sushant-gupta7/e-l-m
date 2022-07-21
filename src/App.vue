<template>
  <div id="app" class="bg-light">
  <navbar></navbar>
  <router-view></router-view>
  </div>
</template>
<script>
import navbar from './views/nav-bar.vue';
export default {
  name: "App",
  components:{
    navbar,
  },
    methods: {
    navigateToHomePage() {
        this.$router.push('/home');
    }
  }
};
</script>
