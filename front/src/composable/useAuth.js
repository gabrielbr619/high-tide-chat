import { ref, onMounted } from "vue";

export default function useAuth() {
  const isAuthenticated = ref(false);
  const username = ref("");

  const login = async (username, password) => {
    const response = await fetch('http://localhost:3000/login', username,password)
    if (response.statusCode === 200){
      localStorage.setItem('token', response.body.token)
    }
    console.log(response);
  };

  const logout = () => {
    isAuthenticated.value = false;
    username.value = "";
  };

  onMounted(() => {
    // Simulate an existing user
    setTimeout(() => {
      isAuthenticated.value = true;
      username.value = "test";
    }, 1000);
  });

  return { isAuthenticated, username, login, logout };
}