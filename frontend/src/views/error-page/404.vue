<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Page404'
})
export default class extends Vue {
  private message = '404 Page Not Found'
}
</script>

<style lang="scss" scoped>

</style>
