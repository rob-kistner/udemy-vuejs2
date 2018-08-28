<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <p>{{ url }}</p>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-media>
              <img src="https://via.placeholder.com/300x200" alt="">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div>Located two hours south of Sydney in the Southern Highlands of New South Wales</div>
              </div>
            </v-card-title>
            <v-card-action>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-action>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        // NOTE: VUE_APP_ is required for use
        // within the application vue code
        url: process.env.VUE_APP_URL
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
footer {
  small {
    color: tomato;
  }
}
</style>
