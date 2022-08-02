<template>
  <div class="bg-light">
    <br>
    <div class="row">
      <div class="col-md-8">
        <input type="text" class="form-control" v-model="searchData" placeholder="Search Equipments..." />
      </div>
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-6">
            <download-csv class="btn btn-default" :data="equipments" name="equipments.csv">
              <button type="button" class="btn btn-md btn-outline-info">Export CSV</button>
            </download-csv>
          </div>
          <div class="col-md-6">
            <button type="button" class="btn btn-md btn-outline-info" v-on:click="showModal = true">+ Add</button>
          </div>
        </div>
      </div>
    </div>
    <br>

    <table v-if="equipments.length > 0" class="table table-bordered table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(object, index) in equipments" :key="index">
          <td>
            {{ index + 1 }}
          </td>
          <td>
            {{ object.equipmentId }}
          </td>
          <td>
            {{ object.name }}
          </td>
          <td>
            {{ object.description }}
          </td>
          <td>
            <div class="row">
              <div class="col-md-1">
                <button type="button" class="btn btn-sm btn-outline-info"
                  v-on:click="navigateToDeailsPage(object.id)">View</button>
              </div>
              <div class="col-md-1">
                <button type="button" class="btn btn-sm btn-outline-primary ml-1"
                  v-on:click="editEquipment(object.id)">Edit</button>
              </div>
              <div class="col-md-1">
                <button type="button" class="btn btn-sm btn-outline-danger ml-1"
                  v-on:click="deleteEquipment(object.id)">Delete</button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
      <addEquipmentModal v-if="showModal" @close="closeModal()" />
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import addEquipmentModal from '../views/addEquipmentModal.vue';
export default {

  name: "App",
  components: {
    addEquipmentModal,
    // VueJsonToCsv
  },
  data() {
    return {
      equipments: [],
      searchData: "",
      showModal: false,
      fields: ['equipmentId', 'name', 'description'],
    };
  },
  watch: {
    searchData() {
      if (this.searchData == '') {
        this.getAllEquipments();
      }
      if (this.searchData != "") {
        const searchData = this.searchData;
        this.getSearchedResults(searchData);
      }
    }
  },
  async mounted() {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    console.log(payload)
    const { data } = await (await fetch("/api/getAllEquipments")).json();
    this.equipments = data;
  },
  methods: {
    navigateToDeailsPage(id) {
      this.$router.push('/details/' + id)
    },
    async getAllEquipments() {
      const { data } = await (await fetch("/api/getAllEquipments")).json();
      this.equipments = data;
    },
    async deleteEquipment(id) {
      let response = await axios.post('http://localhost:7071/api/deleteEquipments', { id: id });
      console.log(response);
      await this.getAllEquipments();
    },
    async editEquipment(id) {
      console.log(id)
      this.showModal = true;
    },
    async closeModal() {
      this.equipments = [];
      const { data } = await (await fetch("/api/getAllEquipments")).json();
      this.equipments = data;
      this.showModal = false;
    },
    async getSearchedResults(searchData) {
      let response = await axios.post('http://localhost:7071/api/searchEquipments', { searchData: searchData });
      this.equipments = response.data.data;
    }
  }
}
</script>