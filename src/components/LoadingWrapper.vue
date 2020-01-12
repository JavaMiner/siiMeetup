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
    <slot v-else />
  </b-row>
</template>

<script>
export default {
  name: 'LoadingWrapper',
  data() {
    return {}
  },
  props: ['loading'],
  components: {},
  methods: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
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
