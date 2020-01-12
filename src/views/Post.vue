<template>
  <LoadingWrapper :loading="loading">
    <b-col cols="12" md="8" class="mx-auto d-flex flex-column">
      <SinglePost :post="{ ...post, image: fullImageUrl }">
        <b-button
          variant="primary"
          @click="$router.go(-1)"
          size="lg"
          class="mt-4 align-self-end"
          >Back
        </b-button>
      </SinglePost>
    </b-col>
  </LoadingWrapper>
</template>

<script>
import axios from 'axios'
import LoadingWrapper from '../components/LoadingWrapper'
import SinglePost from '../components/SinglePost'

export default {
  name: 'Post',
  data() {
    return {
      loading: true,
      post: {},
      image: 'https://picsum.photos/600/300/?image=',
      imageId: Math.ceil(Math.random() * 25)
    }
  },
  props: ['id'],
  components: {
    SinglePost,
    LoadingWrapper
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.loading = true
      this.imageId = Math.ceil(Math.random() * 25)
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(response => {
          this.post = response.data
          this.loading = false
        })
    }
  },
  computed: {
    fullImageUrl() {
      return this.image + this.imageId
    }
  },
  watch: {
    $route(to, from) {
      if (to.name === from.name) this.getData()
    }
  }
}
</script>

<style scoped lang="scss"></style>
