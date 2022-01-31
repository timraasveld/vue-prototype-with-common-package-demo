<template>
  <div id="app">
    App
    <some-component />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SomeComponent from "common-components/SomeComponent.vue"

@Component({
  components: {SomeComponent}
})
export default class App extends Vue {
  mounted() {
    console.log("Vue.prototype.$someGlobal in SomeComponent", Vue.prototype.$someGlobal)
  }
}
</script>