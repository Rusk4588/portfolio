<script setup>

import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import {chatCat, getProject, getProjectFromURL} from "@/scripts/project.js";

const props = defineProps({
  projectName: String
})

const route = useRoute();
const router = useRouter();

const project = ref(chatCat);

onMounted(() => {
  // Check if props have been given:
  if (props.projectName === undefined || props.projectName === "") {

    // Check if there is something in the query
    if (route.params.project) {
      const query = route.params.project.toString();

      project.value = getProjectFromURL(query);

      if (project.value === null)
      {
        router.push("/portfolio/projects");
      }

    } else {
      // Nothing has been queried, push to default which sets up props
      router.push("/portfolio/projects");
    }
  } else {
    // We've got props given!
    project.value = getProject(props.projectName);
  }
})

/*
  Project name

  description

  // (instructions.count >= images.count)
  for # in instructions
    instructions[#]
    if images[#]
      image
  
  link

 */
</script>

<template>

  <div class="card bg-body-secondary p-3 my-3">
    <h3 class="projectName">{{ project.name }}</h3>

    <p class="description">{{ project.description }}</p>

    <p v-if="project.link !== ''">
      See the project here: <a :href="project.link" target="_blank" >{{ project.name }}</a>
    </p>
  </div>


</template>

<style scoped>

</style>
