<script setup>

import {ref} from "vue";

const props = defineProps({
  text: String,
  image: {
    type: String,
    required: false,
    default: undefined
  }
});


const imageClicked = ref(false);
const imageExists = ref(false);

if (props.image) {
  imageExists.value = true;
}

const OnImageClick = () => {
  imageClicked.value = !imageClicked.value;
};

</script>

<template>

  <div class="mt-3">
    <p class="mb-1">
      {{ props.text }}
    </p>

    <img v-if="props.image" v-bind:src="'/portfolio/src/images/' + props.image"  :alt="props.image"
         class="rounded img-fluid mx-sm-auto border border-dark" @click="OnImageClick" />
  </div>

  <div v-if="imageClicked" @click="OnImageClick" style="background-color: rgba(33, 37, 41, 80%)"
       class="position-fixed top-0 start-0 h-100 w-100 overflow-auto d-flex align-items-center">
    <img v-if="props.image" v-bind:src="'/portfolio/src/images/' + props.image"  :alt="props.image" class="mx-auto" />
  </div>

</template>

<style scoped>

</style>
