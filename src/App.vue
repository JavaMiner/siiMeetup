<template>
  <div id="main-body">
    <header>
      <Header />
    </header>
    <main>
      <b-container fluid class="py-3">
        <b-row>
          <b-col cols="12">
            <h1 class="display-2">{{ pageTitle }}</h1>
          </b-col>
        </b-row>
        <router-view />
      </b-container>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import { mapState } from 'vuex'
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    Header,
    Footer
  },
  methods: {},
  computed: {
    ...mapState(['pageTitle'])
  },
  watch: {}
}
</script>

<style lang="scss">
@import 'scss/variables';
@import '~bootstrap/scss/bootstrap.scss';

#main-body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>
