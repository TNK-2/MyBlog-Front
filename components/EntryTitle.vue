<template>
  <nuxt-link :to="`entry/${id}`">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          {{ content }}
          <br>
          <time datetime="2016-1-1">{{ date }}</time>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class EntryTitle extends Vue {
  @Prop()
  public id: string;
  @Prop()
  public title: string;
  @Prop()
  public content: string;
  @Prop()
  public date: string;
}
</script>

<style scoped>
.card {
  height: 145px;
  margin-bottom: 9px;
}
</style>
