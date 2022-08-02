<template>
  <div id="app" class="bg-light">
      <navbar v-show="propUserInfo" @update-mutableUserInfo-selected="onUpdateMutableUserInfoSelected"></navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import navbar from './views/nav-bar.vue';
export default {
  name: "App",
  components: {
    navbar,
  },
  data() {
    return {
      propUserInfo: null,
    }
  },
  methods: {
    navigateToHomePage() {
      this.$router.push('/home');
    },
    onUpdateMutableUserInfoSelected(e) {
      this.propUserInfo = e;
    }
  }
};
</script>
