<template>
  <div class='app-container'>
    <navbar />
    <div class='message'>{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from '@/layout/components/Navbar/index.vue'

@Component({
  name: 'Page404',
  components: {
    Navbar
  }
})
export default class extends Vue {
  private message = '404 Page Not Found'
}
</script>

<style lang='scss' scoped>
.message {
  margin-top: 30px;
  text-align: center;
}
</style>
