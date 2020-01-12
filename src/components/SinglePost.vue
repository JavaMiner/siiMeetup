<template>
  <b-card
    :title="post.title"
    :img-src="post.image"
    img-alt="image"
    img-top
    tag="article"
    class="shadow"
    body-class="d-flex flex-column"
  >
    <b-card-text>
      <p v-if="truncated">{{ post.body | truncate(100) }}</p>
      <p v-else>{{ post.body }}</p>
    </b-card-text>
    <div class="d-flex justify-content-end align-items-end flex-fill">
      <slot />
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'SinglePost',
  data() {
    return {}
  },
  props: {
    truncated: {
      type: Boolean,
      default: false
    },
    post: {
      type: Object,
      required: true
    }
  },
  components: {},
  methods: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss"></style>
