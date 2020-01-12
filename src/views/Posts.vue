<template>
  <b-row>
    <b-col
      cols="12"
      class="position-absolute d-flex justify-content-center align-items-center"
      v-if="loading"
    >
      <b-spinner
        type="grow"
        label="loading"
        variant="primary"
        class="spinner"
      />
    </b-col>
    <b-col
      cols="12"
      md="6"
      lg="4"
      xl="3"
      class="mb-3 d-flex"
      v-else
      v-for="post in posts"
      :key="post.id"
    >
      <b-card
        :title="post.title"
        :img-src="
          `https://picsum.photos/600/300/?image=${Math.ceil(
            Math.random() * 25
          )}`
        "
        img-alt="image"
        img-top
        tag="article"
        class="shadow"
        body-class="d-flex flex-column"
      >
        <b-card-text>
          <p>{{ post.body | truncate(100) }}</p>
        </b-card-text>
        <div class="d-flex justify-content-end align-items-end flex-fill">
          <b-button variant="primary">See more</b-button>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HTTP',
  components: {},
  data() {
    return {
      loading: true,
      posts: []
    }
  },
  created() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(response => {
        this.posts = response.data
      })
      .catch(error => alert(error))
      .finally(() => {
        this.loading = false
      })
  },
  methods: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.position-absolute {
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  .spinner {
    height: 5rem;
    width: 5rem;
  }
}
</style>
