<template>
  <b-row>
    <b-col cols="6" sm="3" md="2" class="d-flex align-items-center">
      <b-img :src="`${require('@/assets/logo.png')}`" fluid />
    </b-col>
    <b-col cols="6" sm="3" md="2" class="d-flex align-items-center">
      <b-img :src="`${require('@/assets/sii.jpg')}`" fluid />
    </b-col>
  </b-row>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  created() {
    this.changeTitle('Welcome to Sii Meetup')
  },
  props: {},
  methods: {
    ...mapMutations(['changeTitle'])
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
