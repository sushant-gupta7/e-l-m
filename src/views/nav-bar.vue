
<template>
  <div class="row mt-2 bg-light">
    <div class="col-md-8 ml-2 justify-content-center">
      <div class="card mb-4">
        <div class="card-body">
          <h3 class="text-primary text-center" style="cursor: pointer;">Equipment Ledger Management System</h3>
        </div>
      </div>
    </div>
    <div class="col-md-4 bg-light">
      <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <h6 class="text-primary text-center" style="cursor: pointer;">Welcome {{ userInfo?.userDetails }}</h6>
            </div>
            <div class="col-md-6 text-right">
              <button v-on:click="navigateToLoginPage()" class="btn btn-md btn-primary">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  props: {
    mutableUserInfo: {
      type: Object
    }
  },
  data() {
    return {
      userInfo: this.mutableUserInfo
    };
  },
  
  methods: {
    async getUserInfo() {
      try {
        const response = await fetch('/.auth/me');
        const payload = await response.json();
        const { clientPrincipal } = payload;
        return clientPrincipal;
      } catch (error) {
        console.error('No profile could be found');
        return undefined;
      }
    },
    async navigateToLoginPage() {
      window.location.href = "/.auth/logout?post_logout_redirect_uri=/login"
      this.userInfo = null;
      this.$emit("update-mutableUserInfo-selected", null) ;
    },
  },
  async created() {
    this.userInfo = await this.getUserInfo();
      this.$emit("update-mutableUserInfo-selected", this.userInfo) ;
  },
}

</script>
