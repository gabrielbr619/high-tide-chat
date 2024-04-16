<template>
  <div class="login-container">
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
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
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      loading: false,
      error: ""
    };
  },
  methods: {
    async login() {
      this.loading = true;

      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: this.username, password: this.password })
      }
      )
      this.loading = false;
      if (response.status === 200) {
        const data = await response.json();

        localStorage.setItem('token', data.token)
        localStorage.setItem('user', data.user)
        this.$router.push("/");
      }
      this.error = "Não foi possível logar, tente novamente, bunda mole.";
    }
  }
};
</script>

<style>

.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-form {
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