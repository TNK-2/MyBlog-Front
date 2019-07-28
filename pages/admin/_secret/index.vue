<template>
  <div>
    <Header />
    <div class="main">
      <h1>管理者アクセス設定ページ</h1>
      <p>以下にアクセス用シークレットキーを入力してください。</p>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
</style>
