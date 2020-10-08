<template>
  <div class="tabs">
    <Tab>
      <router-link to="/" :exact="true">Home</router-link>
    </Tab>
    <Tab>
      <router-link to="/features" :exact="true">Features</router-link>
    </Tab>
    <Tab>
      <router-link to="/about" :exact="true">about</router-link>
    </Tab>
  </div>
</template>

<script>
import Tab from "@/components/Tab";
export default {
  name: "Header",
  components: {
    Tab
  }
}
</script>

<style scoped>

</style>
