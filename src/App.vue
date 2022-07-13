<template>

  <div id="app" class=" bg-light">

  <div class="row mt-2  ml-2 justify-content-center">
    <div class="col-md-12">
      <div class="card mb-4">
        <div class="card-body">        
          <h3 class="text-primary text-center" style="cursor: pointer;" v-on:click="navigateToHomePage()">Equipment Ledger Management System</h3>
        </div>
      </div>
    </div>
  </div>
    <!-- <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <h3 class="text-primary" style="cursor: pointer;" v-on:click="navigateToHomePage()">Equipment Ledger Management System</h3>
      </div>
    </div>
  </form>
</nav> -->
  </div>
  <router-view />
</template>
<script>
export default {
  name: "App",
    methods: {
    navigateToHomePage() {
        this.$router.push('/home');
    }
  }
};
</script>
