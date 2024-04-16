<template>
    <div class="register-container">
      <div class="register-form">
        <h2>Register</h2>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" />
          </div>
          <button type="submit" :disabled="loading">Submit</button>
          <p v-if="error" class="error">{{ error }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Register",
    data() {
      return {
        username: "",
        password: "",
        loading: false,
        error: ""
      };
    },
    methods: {
      async register () {
        this.loading = true;
        const response = await fetch('http://localhost:3000/register', username, password)
        if(response.statusCode == 200) {
          localStorage.setItem('token', response.body.token)
        }
        setTimeout(() => {
          this.loading = false;
          if (this.username === "test" && this.password === "test") {
            this.$router.push("/home");
          } else {
            this.error = "Não foi possível logar, tente novamente, bunda mole.";
          }
        }, 2000);
      }
    }
  };
  </script>
  
  <style>
  .register-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .register-form {
    width: 300px;
    padding: 30px;
    border-radius: 5px;
    background-color: #f2f2f2;
  }
  
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: inline-block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"] {
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
  }
  
  button[type="submit"] {
    padding: 10px 20px;
    border-radius: 3px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button[type="submit"]:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>