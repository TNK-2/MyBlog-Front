<template>
  <nav class="navbar is-link" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <div class="navbar-item title-font">
          テストページ
        </div>
      </nuxt-link>
      <div class="navbar-burger" data-target="navMenu" :class="{'is-active': isMenuActive}" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div><!-- navbar-brand END -->
    <div id="navMenu" class="navbar-menu" :class="{'is-active': isMenuActive}">
      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item">
          トップ
        </nuxt-link>
        <nuxt-link to="/about" class="navbar-item">
          筆者について
        </nuxt-link>
        <nuxt-link to="/contact" class="navbar-item">
          お問い合わせ
        </nuxt-link>
      </div>
    </div><!-- navbar-menu END -->
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  isMenuActive: boolean = false;

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive
  }
}
</script>

<style>
.title-font {
  margin-top: -10px;
  margin-bottom: -5px;
  font-size: 25px;
  color: white;
}
</style>
