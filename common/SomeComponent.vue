<template>
  <span>some component</span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SomeComponent extends Vue {
  mounted() {
    console.log("this.$someGlobal in SomeComponent:", this.$someGlobal)
  }
}
</script>