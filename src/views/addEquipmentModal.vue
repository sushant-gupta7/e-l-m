<template>
    <div>
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper bg-light">
                    <div class="modal-container">
                        <div class="modal-header d-flex justify-content-center">
                            <slot name="header">
                                <h5 class="modal-title">Equipment Details</h5>
                                <button type="button" class="btn btn-sm" data-dismiss="modal" aria-label="Close"
                                    v-on:click="clearData()">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </slot>
                        </div>
                        <div class="modal-body">
                            <slot name="body">
                                <form>
                                    <div class="row">
                                        <div class="col form-group">
                                            <label for="exampleInputEmail1"><b>Id</b></label>
                                            <input type="text" class="form-control" placeholder="Enter Id"
                                                v-model="equipmentId">
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col form-group">
                                            <label for="exampleInputPassword1"><b>Name</b></label>
                                            <input type="text" class="form-control" placeholder="Enter Name"
                                                v-model="name">
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col form-group">
                                            <label for="exampleInputPassword1"><b>Description</b></label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                                v-model="description"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </slot>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <slot name="footer">
                                <button class="btn btn-sm btn-primary" v-on:click="saveEquipmentData()">
                                    Save Details
                                </button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            equipmentId: '',
            name: '',
            description: '',
        };
    },

    methods: {
        async saveEquipmentData() {
            const value = {
                equipmentId: this.equipmentId,
                name: this.name,
                description: this.description
            };
            let response = await axios.post('http://localhost:7071/api/addEquipments', { value: value });
            console.log(response);
            this.$emit('close');
            this.clearData();
            //   this.equipments = response.data.data;
        },
        async clearData() {
            this.equipmentId = '';
            this.name = '';
            this.description = '';
            this.$emit('close');
        },
    }
}
</script>

<style scoped>
.modal-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
}

.modal-wrapper {
    text-align: center;
    height: 500px;
    width: 500px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
}

.close {
    margin: 10% 0 0 16px;
    cursor: pointer;
}

.close-img {
    width: 25px;
}

.check {
    width: 150px;
}

h6 {
    font-weight: 500;
    font-size: 28px;
    margin: 20px 0;
}

p {
    font-size: 16px;
    margin: 20px 0;
}
</style>