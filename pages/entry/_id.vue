<template>
  <div>
    <Header />
    <div class="main">
      <div style="font-size:initial; font-weight:initial;" v-html="$md.render(model)"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  },
  data() {
    return {
      model: '# 今日は！  \n\n## 見出し2  \n\n新しいブログ記事です。  \n\n```javascript\nconst f = () => {};\n```'
    }
  }
}
</script>

<style>
</style>
