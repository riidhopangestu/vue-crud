<template>
    <div v-if="currentUser" class="edit-form">
      <h4>User</h4>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name"
            v-model="currentUser.name"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email"
            v-model="currentUser.email"
          />
        </div>
  
      </form>
  
      <button class="badge badge-danger mr-2"
        @click="deleteUser"
      >
        Delete
      </button>
  
      <button type="submit" class="badge badge-success"
        @click="updateUser"
      >
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Please click on a User...</p>
    </div>
  </template>
  
  <script>
  import TutorialDataService from "../services/TutorialDataService";
  
  export default {
    name: "user",
    data() {
      return {
        currentUser: null,
        message: ''
      };
    },
    methods: {
      getUser(id) {
        TutorialDataService.get(id)
          .then(response => {
            this.currentUser = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      updateUser() {
        TutorialDataService.update(this.currentUser.id, this.currentUser)
          .then(response => {
            console.log(response.data);
            this.message = 'The user was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      deleteUser() {
        TutorialDataService.delete(this.currentUser.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "users" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.message = '';
      this.getUser(this.$route.params.id);
    }
  };
  </script>
  
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>