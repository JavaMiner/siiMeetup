<template>
  <LoadingWrapper :loading="loading">
    <b-col
      cols="12"
      md="6"
      lg="4"
      xl="3"
      class="mb-3 d-flex"
      v-for="post in posts"
      :key="post.id"
    >
      <SinglePost
        :post="{
          ...post,
          image: `https://picsum.photos/600/300/?image=${Math.ceil(
            Math.random() * 25
          )}`
        }"
        truncated
      >
        <b-button
          variant="primary"
          :to="{ name: 'post', params: { id: post.id } }"
          >See more</b-button
        >
      </SinglePost>
    </b-col>
  </LoadingWrapper>
</template>

<script>
import axios from 'axios'
import LoadingWrapper from '../components/LoadingWrapper'
import SinglePost from '../components/SinglePost'
export default {
  name: 'Posts',
  components: {
    LoadingWrapper,
    SinglePost
  },
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

<style lang="scss" scoped></style>
