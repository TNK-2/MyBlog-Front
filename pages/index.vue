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

<script>
import Header from '~/components/Header.vue'
import EntryTitle from '~/components/EntryTitle.vue'

export default {
  components: {
    Header,
    EntryTitle
  },

  data() {
    return {
      progress: false,
      message: ''
    }
  },

  created() {
    this.getAllEntries()
  },

  methods: {
    setProgress(message) {
      this.progress = true
      this.message = message
    },

    resetProgress() {
      // this.progress = false
      // this.message = ''
    },

    getAllEntries() {
      this.setProgress('読み込み中...')
      this.$store.dispatch('auth/getAllEntries')
    }
  }
}
</script>

<style lang="scss">
</style>
