<script setup>

import AboutMe from "@/components/AboutMe.vue";
import SkillsPage from "@/components/SkillsPage.vue";
import ContactPage from "@/components/ContactPage.vue";
</script>

<template>
  <AboutMe :show-cats="false" />

  <hr />

  <SkillsPage :show-resume="false" />

  <hr />

  <ContactPage />

</template>

<style scoped>

</style>
