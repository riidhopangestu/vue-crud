<template>
    <div>
        <h2>Table User</h2>
        <table class="table" id="datatable">
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id" @click="showModal(user)">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- table dialog vuematerial -->
    <!-- <div>
    <md-dialog :md-active.sync="showDetailModal">
      <md-dialog-title>Detail User</md-dialog-title>

      <div>
        <md-table>
        <md-table-row>
            <md-table-head>Name</md-table-head>
            <md-table-head>Username</md-table-head>
            <md-table-head>Email</md-table-head>
            <md-table-head>Address</md-table-head>
            <md-table-head>Phone</md-table-head>
            <md-table-head>Company</md-table-head>
        </md-table-row>

        <md-table-row>
            <md-table-cell>{{ currentUser.name }}</md-table-cell>
            <md-table-cell>{{ currentUser.username }}</md-table-cell>
            <md-table-cell>{{ currentUser.email }}</md-table-cell>
            <md-table-cell>{{ currentUser.address }}</md-table-cell>
            <md-table-cell>{{ currentUser.phone }}</md-table-cell>
            <md-table-cell>{{ currentUser.company }}</md-table-cell>
        </md-table-row>
        </md-table>
    </div>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDetailModal = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div> -->

  <div>
    <b-modal v-model="showDetailModal">
        <div class="container">
            <div class="row">
                <div>
                    Nama:
                </div>
                <div>
                    {{ currentUser.name }}
                </div>
            </div>
            <div class="row">
                <div>
                    Username:
                </div>
                <div>
                    {{ currentUser.username }}
                </div>
            </div>
        </div>
    </b-modal>
  </div>
  
    <div v-if="showDetailModal">
      <button class="close" @click="showDetailModal = false">x</button>
      <div>
        <h2>Table User</h2>
        <table class="table">
            <thead>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Company</th>
            </thead>
            <tbody>
                <tr>
                    <td>{{ currentUser.name }}</td>
                    <td>{{ currentUser.username }}</td>
                    <td>{{ currentUser.email }}</td>
                    <td>{{ currentUser.address }}</td>
                    <td>{{ currentUser.phone }}</td>
                    <td>{{ currentUser.company}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
   
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import $ from "jquery";
    export default {
        data(){
            return {
                users: [],
                currentUser: {
                    name: '',
                    username: '',
                    email: '',
                    address: '',
                    phone: '',
                    company: ''
                },
                showDetailModal: false,
            };
        },
        methods: {
            retrieveUsers() {
                TutorialDataService.getAll()
                .then(response => {
                    this.users = response.data;
                    $("#datatable").DataTable();
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
            },
            showModal(user) {
                this.showDetailModal = true;
                this.currentUser = user;
                console.log(this.showDetailModal);
                console.log(this.currentUser);
            }
        },
        mounted() {
                this.retrieveUsers();
        },
    }
</script>

<style>

</style>