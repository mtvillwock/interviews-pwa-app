<template>
  <div
    class="screen-login"
  >
    <div
      class="d-flex flex-wrap justify-content-center align-items-center h-100"
    >
      <div>
        <form
          class="screen-login__form"
          @submit.prevent="login"
        >
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
          >
          <div
            v-if="error"
            class="screen-login__error"
          >
            The password is incorrect. Try again
          </div>
          <div>
            <button
              type="submit"
              class="screen-login__submit"
            >
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {LOGIN} from '../store/actions/status'

export default {
  name: 'ScreenLogin',

  data () {
    return {
      error: false,
      password: ''
    }
  },

  methods: {
    login () {
      const password = this.password
      if (password === process.env.PASSWORD) {
        this.$store.commit(LOGIN, 1)
      } else {
        this.error = true
      }
    }
  }
}
</script>
