<script setup>

const props = defineProps({
  showResume: {
    type: Boolean,
    default: true
  }
})

</script>

<template>
  <h1 class="text-center">Skills and Experience</h1>

  <div class="px-3">
    <h3>Skills</h3>

    <p>See <a href="/portfolio/skills#resume">my resume</a> for more details</p>
    <ul>
      <li>Full Stack Development</li>
      <li>Agile Development</li>
      <li>Team Communication</li>
    </ul>

    <h3>Experience</h3>

    <ul>
      <li>Full Stack Development</li>
      <li>Saskatoon 2024 Fall Game Jam</li>
    </ul>

    <div v-if="showResume" class="flex overflow-auto w-full">
      <h3 id="resume">Resume</h3>

      <iframe src="src/documents/Resume.pdf" type="application/pdf" class="w-100 min-vh-100" />
    </div>

  </div>


</template>

<style scoped>

</style>
