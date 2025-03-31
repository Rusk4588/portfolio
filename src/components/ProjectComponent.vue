<script setup>

import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";

const props = defineProps({
  projectName: String
})

const route = useRoute();
const router = useRouter();

let a = route.params.project
const project = ref("");

console.log("HERE")

onMounted(() => {
  if (props.projectName === undefined || props.projectName === "") {
    if (route.params.project) {
      project.value = route.params.project.toString();
    } else {
      console.log("ahh?")
      //router.push("/projects");
    }
  } else {
    project.value = props.projectName;
  }
})

</script>

<template>

  <h3>{{ project }}</h3>

</template>

<style scoped>

</style>
