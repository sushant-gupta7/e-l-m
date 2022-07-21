<template>
  <div class="bg-light">
    <br>
    <div class="row">
      <div class="col-md-10">
        <input type="text" class="form-control" v-model="searchData" placeholder="Search Equipments..." />
      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-md btn-outline-info"  @click="showModal = true">+ Add</button>
      </div>
    </div>
    <br>
    <table v-if="equipments.length > 0" class="table table-bordered table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(object, index) in equipments" :key="index">
          <td>
            {{ object.id }}
          </td>
          <td>
            {{ object.name }}
          </td>
          <td>
            {{ object.description }}
          </td>
          <td>
            <button type="button" class="btn btn-sm btn-outline-info"
              v-on:click="navigateToDeailsPage(object.id)">View</button>
          </td>
        </tr>
      </tbody>
    </table>
    <addEquipmentModal v-show="showModal" @click="showModal = false" />
  </div>
</template>

<script>
import axios from 'axios';
import addEquipmentModal from '../views/addEquipmentModal.vue'
export default {

  name: "App",
  components: {
    addEquipmentModal
  },
  data() {
    return {
      equipments: [],
      searchData: "",
      showModal: false,
    };
  },
  watch: {
    searchData() {
      if (this.searchData == '') {
        this.getAllEquipments();
        // return this.equipments
      }
      if (this.searchData != "") {
        const searchData = this.searchData;
        this.getSearchedResults(searchData);
        // return this.equipments;
      }
    }
  },
  async mounted() {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    console.log(payload)
    const { data } = await (await fetch("/api/getAllEquipments")).json();
    this.equipments = data;
    // const allRowsEntities = serviceClient.listEntities();
    // console.log('allRowsEntities', allRowsEntities);
    // this.equipments_dup = data;
  },
  methods: {
    navigateToDeailsPage(id) {
      this.$router.push('/details/' + id)
    },
    async getAllEquipments() {
      const { data } = await (await fetch("/api/getAllEquipments")).json();
      this.equipments = data;
    },
    async getSearchedResults(searchData) {
      let response = await axios.post('http://localhost:7071/api/searchEquipments', { searchData: searchData });
      this.equipments = response.data.data;
    }
  }
}
</script>