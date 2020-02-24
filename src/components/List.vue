<template>
  <div class="list">
      <h4>List</h4>
      <ul>
          <li :key="post.id" v-for="post in posts" v-text="post.name"></li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'List',

  mounted: function () {
      axios.get('http://jobagent.test/users')
        .then(response => this.posts = response.data)
  },

  data() {
      return {
          posts: null
      }
  },

}
</script>

<style scoped>

</style>
