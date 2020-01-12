<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand to="/">Sii Meetup</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'posts' }">Posts</b-nav-item>
        <b-nav-item @click="goToRandomPost()">Random Post</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {}
  },
  components: {},
  methods: {
    goToRandomPost() {
      this.$router.push({
        name: 'post',
        params: { id: Math.ceil(Math.random() * 100) }
      })
    }
  },
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss"></style>
