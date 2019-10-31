<style src="./UsersStyle.css"></style>

<template>
  <div>
    <h1>Create User</h1>

    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      {{ message }}
    </div>

    <div id="app">
      <!-- <form @submit.prevent="submitForm" autocomplete="off"> -->
      <!-- <div class="form-group"> -->
      <label for="name">Name:</label>
      <input v-model="name" id="name" />
      <label for="password">Password:</label>
      <input v-model="password" id="password" />
      <p>
        <button @click="saveUser">Save user</button>
      </p>
      <p v-if="$v.form.name.$invalid" class="error-message">name required</p>
      <!-- </div> -->
      <div>
        <!-- <button :disabled="$v.form.invalid">Submit</button> -->
      </div>
      <!--</form>-->
      <!-- <li v-for="item in items" :key="item">{{ item.userName }}</li>-->
      <div>
        <h1>hello</h1>
        <UsersListVue></UsersListVue>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from './UserService.js'
import UsersListVue from './UsersList.vue'
import { EventBus } from '../../main'
//import { MyUser } from './MyUser.vue'
//import validators from 'vuelidate'

export default {
  components: {
    UsersListVue
  },
  data: function() {
    UserService
    return {
      message: '-',
      userId: 0,
      name: null,
      password: null,
      // form: {

      //},
      errors: [],
      items: []
    }
  },
  methods: {
    saveUser: function() {
      const formData = {
        name: this.name
        //password: this.password,
        //_id: this.userId
      }
      UserService.saveUser(formData).then(data => {
        this.message = 'user saved'
        // alert(data)
        this.getUsers()
      })
    },
    submitForm() {
      if (!this.$v.$invalid) {
        this.saveUser()
      } else {
        alert('Please correct errors')
      }
    }
  },

  validations: {
    form: {
      name: {
        //  required: validators.required
      }
    }
  },
  created() {
    EventBus.$on('userSelected', data => {
      this.name = data.userName
      this.password = data.password
      this.userId = data._id
    })
  }
}
</script>
