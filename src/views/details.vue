<template> 
<div class="bg-light">
  <br>
  <div class="row">
    <div class="col-md-12">
      <button style="margin-left: 5px;"
          type="button"
          class="btn btn-outline-info btn-md ml-3"
          id="btn-back-to-top" v-on:click="navigateToHomePage()">
          Back
  </button>
    <h3 class="text-primary text-center ">Equipment Details</h3>
    </div>
  </div>
  <br>
  <div class="row justify-content-center mt-2 ml-2">
    <div class="col-md-6">
      <div class="card mb-4">
        <div class="card-body">
          <h4 class="text-primary text-center">Equipment Id</h4>
          <h5 class="text-center">{{selectedEquipment?.equipmentId}}</h5>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card mb-4">
        <div class="card-body">
          <h4 class="text-primary text-center">Equipment Name</h4>
          <h5 class="text-center">{{selectedEquipment?.name}}</h5>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-2  ml-2 justify-content-center">
    <div class="col-md-12">
      <div class="card mb-4">
        <div class="card-body">
          <h4 class="text-primary text-center">Equipment Description</h4>
          <h5 class="text-center">{{description}}</h5>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios';
  export default {
    data() {
    return {
      selectedEquipment: {},
      description: ''
    };
  },
    async mounted() {
    const id = this.$route.params.id
    axios.post('http://localhost:7071/api/getSelectedEquipmentData',{selectedId: id} ).then((selectedEquipmentData) => {
        this.selectedEquipment = selectedEquipmentData.data.data[0];
        this.description = this.selectedEquipment.description;
    });
  },
    methods: {
    navigateToHomePage() {
        this.$router.push('/home');
    }
  }
  };
</script>