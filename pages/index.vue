<template>
  <div>
    <Header />
    <div class="main">
      <EntryTitle
        id="1"
        title="test1"
        content="fasdfafdajdfaflkflak"
        date="20190610"
      />
      <EntryTitle
        id="2"
        title="test1"
        content="fasdfafdajdfaflkflak"
        date="20190610"
      />
      <EntryTitle
        id="3"
        title="test1"
        content="fasdfafdajdfaflkflak"
        date="20190610"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Header from '~/components/Header.vue'
import EntryTitle from '~/components/EntryTitle.vue'

export default {
  components: {
    Header,
    EntryTitle
  }
}
</script>

<style lang="scss">
</style>
