<script setup>

// https://3bulletmonstermania.itch.io/3-bullet-monster-mania

import {ref} from "vue";

const route = useRoute();
const all = ref(true);

console.log(route.params.project);

if (route.params.project) {
  all.value = false;
}

import ProjectComponent from "@/components/ProjectComponent.vue";
import {useRoute} from "vue-router";
</script>

<template>
  <h1>Projects</h1>

  <RouterView v-if="!all" />

  <div v-if="all">
    <ProjectComponent project-name="Monster Mania" />
    <ProjectComponent project-name="Cat Forum" />
    <ProjectComponent project-name="Events App" />
  </div>
</template>

<style scoped>

</style>
