<script setup>

// https://3bulletmonstermania.itch.io/3-bullet-monster-mania

import ProjectComponent from "@/components/ProjectComponent.vue";

import { ref, watch } from "vue";
import { projects } from "@/scripts/project.js";
import { useRoute } from "vue-router";

const route = useRoute();
const all = ref(true);
const allProjects = ref(projects);

if (route.params.project) {
  all.value = false;
}

watch(() => route.params, (param) => {
  all.value = param.length === undefined;
});


</script>

<template>
  <h1>Projects</h1>

  <RouterView v-if="!all" />

  <div v-if="all">
    <ProjectComponent v-for="project in allProjects" :key="project.id" :project-name="project.name" />
  </div>
</template>

<style scoped>

</style>
