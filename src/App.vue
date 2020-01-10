<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/">Sii Meetup</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/posts">Posts</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid class="py-3">
      <b-row>
        <b-col cols="12">
          <h1 class="display-2">Welcome to Sii Meetup</h1>
        </b-col>
      </b-row>
      <router-view />
    </b-container>
  </div>
</template>

<style lang="scss">
@import 'scss/variables';
@import '~bootstrap/scss/bootstrap.scss';

body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>
