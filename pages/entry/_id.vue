<template>
  <div>
    <Header />
    <div class="main">
      <h1 class="content entory-title">記事タイトル</h1>
      <div class="content entry-content" style="font-size:initial; font-weight:initial;" v-html="$md.render(model)"></div>
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

<style lang="scss">
.entory-title {
  margin: 0 auto;
  font-size: 2.7rem;
  font-weight: 700;
  margin-bottom: 16px;
  font-feature-settings: "palt";
  line-height: 1.2;
  padding: 20px 0 0 20px;
}
.entry-content {
  padding: 20px;
}
pre {
  font-size: 1.1rem;
}
</style>
