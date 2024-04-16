<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { socket } from "@/socket";
</script>
<template>
  <main>
    <sidebar>
      <div class="user-container">
        <div class="user-info">
            SOU EU PORRA
        </div>
        <div class="user-controls">
          <div class="user-controls-item">
            <button>
              <i class="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="high-tide-container">
        <h1>Maré Alta</h1>
      </div>
      <div class="contacts-list">
        <div class="first-contact">
            <p>VAGABUNDO 1</p>
        </div>
        <div class="second-contact">
            <p>VAGABUNDO 2</p>
        </div>
      </div>
    </sidebar>
    
    <body>
      <ul id="messages"></ul>
      <form id="form" action="" @submit.prevent="send_message">
        <input id="input" autocomplete="off" /><button>Send</button>
      </form>
    </body>
  </main>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    async send_message() {
      const input = document.getElementById('input');
      console.log(input.value)
      if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
      }
    }
  }
}

socket.on('chat message', (msg) => {
  const div = document.createElement('div');
  const username = document.createElement('p1');
  const item = document.createElement('li');

  username.textContent = localStorage.getItem
  item.textContent = msg;
  messages.appendChild(div);
  messages.appendChild(div);

  window.scrollTo(0, document.body.scrollHeight);
});
</script>

<style scoped>

/* --charcoal: #264653ff;
--persian-green: #2a9d8fff;
--saffron: #e9c46aff;
--sandy-brown: #f4a261ff;
--burnt-sienna: #e76f51ff; */

main{

}
  sidebar{
    width: max-content;
    height: 100vh;
    background-color: #FF9356;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }

  body{
    background-color: #264653ff;
    height: 100vh;
  }
  .user-info{
    background-color: #FB4B13;
    font-size: 32px;
    color:white;
    padding: 0.7em 0.5em;
  }

  .high-tide-container{
    background-color: #21608E;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;
  }
  .high-tide-container h1{
     font-size: 48px;
     margin: 0.2em;
  }

  .contacts-list div{
    background-color: #2a9d8f;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
  }

  .contacts-list div p{
     font-size: 16px;
     margin: 0.2em;
  }

</style>
