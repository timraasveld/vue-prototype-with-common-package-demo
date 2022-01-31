<template>
  <span>some component</span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SomeComponent extends Vue {
  mounted() {
    console.log("Vue.prototype.$someGlobal in SomeComponent", Vue.prototype.$someGlobal)
  }
}
</script>