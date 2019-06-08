<template>
  <p>hello header!</p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  }
}
</script>
