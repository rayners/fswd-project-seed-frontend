<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <NavBar></NavBar>
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'app',
  components: { NavBar },
  mounted() {
    this.$store.dispatch('loadcurrentuser');
  }
};
</script>