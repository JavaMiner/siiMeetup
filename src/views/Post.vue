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
    <b-col cols="12" md="8" class="mx-auto" v-else>
      <SinglePost :post="{ ...post, image }" />
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'
import SinglePost from '../components/SinglePost'

export default {
  name: 'Post',
  data() {
    return {
      loading: true,
      post: {},
      image: `https://picsum.photos/600/300/?image=${Math.ceil(
        Math.random() * 25
      )}`
    }
  },
  props: ['id'],
  components: {
    SinglePost
  },
  created() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then(response => {
        this.post = response.data
        this.loading = false
      })
  },
  methods: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss"></style>
