<script setup>

import AboutMe from "@/components/AboutMe.vue";
import SkillsPage from "@/components/SkillsPage.vue";
import ProjectsPage from "@/components/ProjectsPage.vue";
import ContactPage from "@/components/ContactPage.vue";
</script>

<template>
  <AboutMe :show-cats="false" />

  <hr />

  <SkillsPage />

  <hr />

  <ProjectsPage />

  <hr />

  <ContactPage />

</template>

<style scoped>

</style>
