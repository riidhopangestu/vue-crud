<template>
    <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="user.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          class="form-control"
          id="email"
          required
          v-model="user.email"
          name="email"
        />
      </div>

      <button @click="saveUser" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newUser">Add</button>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

    export default {
        name: "add-user",
        data() {
            return {
                user: {
                    id: null,
                    name: "",
                    email: ""
                },
                submitted: false
            };
        },
       methods: {
        saveUser() {
            var data = {
                name: this.user.name,
                email: this.user.email
            };

            TutorialDataService.create(data)
            .then(response => {
                this.user.id = response.data.id;
                console.log('User id didaftarkan:',response.data);
                console.log('User didaftarkan:',this.user.name,',', this.user.email);
                this.submitted = true;
            })
            .catch(e => {
                console.log(e);
            });
        },

        newUser() {
            this.submitted = false;
            this.user = {};
        }
        } 
    };
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>