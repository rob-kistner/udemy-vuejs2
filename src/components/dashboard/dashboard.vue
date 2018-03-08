<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>First user's email: <strong>{{email}}</strong></p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {

    /*-----------------------------------
    /  retrieve USERS from firebase
    /  on page load
    -----------------------------------*/
    data() {
      return {
        email: ''
      }
    },
    created() {
      /*-----------------------------------
      |  retrieve all users from Firebase,
      |  stuff them into a local array,
      |  output the first user's email on the page
      |
      |  NOTE: there's a global config setting on main.js 
      |  for the firebase url, which is why we can just 
      |  target users.json here.
      -----------------------------------*/
      axios.get('/users.json')
        .then(res => {
          console.log(res);
          const data = res.data;
          const users = [];
          for(let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          console.log(users);
          this.email = users[0].email;
        })
        .catch(error => console.log(error));
    }
  }
</script>


<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    /* color: red; */
  }
</style>