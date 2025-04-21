<script setup>

import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { chatCat, getProject, getProjectFromURL } from "@/scripts/project.js";
import DescriptionComponent from "@/components/DescriptionComponent.vue";

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

</script>

<template>

  <div class="card bg-body-secondary p-3 my-3">

    <h3 class="projectName card-title">{{ project.name }}</h3>

    <div class="card-header bg-transparent small p-0 mb-2">
      By: <span v-for="(value, index) in project.involvement"><span v-if="index !== 0">, </span>{{ value }}</span>
    </div>

    <p class="description">{{ project.description }}</p>

    <div class="d-flex flex-column">
      <div v-for="(value, index) in project.instructions" :key="index">
        <DescriptionComponent :text="value" :image="project.images[index]" />
      </div>
    </div>


    <p v-if="project.link !== ''" class="mt-3">
      See the project here: <a :href="project.link" target="_blank" >{{ project.name }}</a>
    </p>
  </div>

</template>

<style scoped>

</style>
