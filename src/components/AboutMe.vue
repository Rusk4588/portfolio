<script setup>

const props = defineProps({
  showCats: {
    type: Boolean,
    default: true
  }
})

</script>

<template>
  <h1 class="text-center">About Me</h1>


  <div class="d-md-flex d-block flex-row justify-content-between align-items-start">

    <div class="col-12 col-md-6 p-3">
      <div id="me">
        <p>
          My name is Morgan Rusk, and I am a 21 year old Computer Systems Technology student at Saskatchewan Polytechnic.
        </p>

        <p>
          I am a full-stack software developer well-versed in the Model-View-Controller (MVC) pattern, with experience with multiple frameworks
          (such as Express.js, Symfony, ReactJS, jQuery, Vue.js, and more). I am familiar with databases such as MySQL and SQLite.
        </p>

        <p>
          Languages that I have worked with include Python, Java, JavaScript, Typescript, C#, C++, and PHP.
          I also have experience in working with both HTML and CSS, as well as CSS frameworks such as bootstrap.
        </p>
      </div>


      <div id="history">
        <h3>History</h3>

        <p>
          Born and raised in Saskatoon, Saskatchewan, I am a proud member of the Mistawasis Nêhiyawak (ᒥᐢᑕᐚᓯᐢ ᓀᐦᐃᔭᐘᐠ) First Nations band.
        </p>

        <p>
          I've got an older sister, and two younger step-siblings, as well as five cats.
          <a v-if="showCats" href="#cats">Please look at my cats.</a>
        </p>
      </div>


      <div id="facts">
        <h3>Fun Facts</h3>

        <ul>
          <li>My birthday is on October 31st!</li>
          <li>Another fact!</li>
          <li>One more!</li>
        </ul>
      </div>

    </div>

    <figure class="d-flex flex-column figure">
      <img src="/src/images/morgan.JPG" alt="Headshot photo of Morgan Rusk" class="rounded w-75 mx-auto align-content-center figure-img">
      <figcaption class="figure-caption mx-auto">Morgan Rusk</figcaption>
    </figure>
  </div>



  <div v-if="showCats" id="cats">
    <hr />

    <h3 class="text-center">Kitties</h3>

    <div class="d-sm-flex flex-wrap justify-content-between">

      <figure class="figure mx-auto">
        <figcaption class="figure-caption text-center w-100">Beans</figcaption>
        <img src="/src/images/Beans.jpeg" alt="Beans, a solid grey domestic short-hair cat" class="rounded img-fluid figure-img" />
      </figure>

      <figure class="figure mx-auto">
        <figcaption class="figure-caption text-center w-100">Pippin</figcaption>
        <img src="/src/images/Pippin.jpeg" alt="Pippin, a black and white main coon mix cat" class="rounded img-fluid figure-img" />
      </figure>

      <figure class="figure mx-auto ">
        <figcaption class="figure-caption text-center w-100">Noodles</figcaption>
        <img src="/src/images/Noodles.jpeg" alt="Noodles, a calico short-hair cat" class="rounded img-fluid figure-img" />
      </figure>

      <figure class="figure mx-auto">
        <figcaption class="figure-caption text-center w-100">Merry</figcaption>
        <img src="/src/images/Merry.jpeg" alt="Merry, a large brown maine coon cat" class="rounded img-fluid figure-img" />
      </figure>

      <figure class="figure mx-auto">
        <figcaption class="figure-caption text-center w-100">William</figcaption>
        <img src="/src/images/SirBilliam.jpg" alt="William, a fully black short-hair cat" class="rounded img-fluid figure-img" />
      </figure>

    </div>

  </div>

</template>

<style scoped>

img {
  max-height: 80vh;
  object-fit: contain;
}
</style>
