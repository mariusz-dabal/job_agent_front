<template>
  <div>
      <h2>Sign in</h2>
      <LoginPanel />
  </div>
</template>

<script>
import LoginPanel from '@/components/LoginPanel'

export default {
  name: 'Login',

  components: {
    LoginPanel
  },

  data() {
      return {
      }
  },

}
</script>

<style scoped>

</style>