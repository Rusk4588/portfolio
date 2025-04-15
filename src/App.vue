<script setup>

</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Portfolio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/portfolio/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/portfolio/about">About Me</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/portfolio/skills">Skills and Experience</RouterLink>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Projects
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                  <RouterLink to="/portfolio/projects" class="dropdown-item" >All Projects</RouterLink>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="/portfolio/projects/cat">Online Cat chat forum</a></li>
                  <li><a class="dropdown-item" href="/portfolio/projects/events">City events application</a></li>
                  <li><a class="dropdown-item" href="/portfolio/projects/monster">Monster mania video game</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/portfolio/contact">Contact Me</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <div class="container my-4 mx-sm-auto card p-3">
    <RouterView />
  </div>

</template>

<style>
body, html {
  background-color: lightseagreen;
  margin: 0;
  padding: 0;
}

#app {
  background-color: lightgreen;
  overflow: hidden;
  min-height: 100vh;
}

@media (max-width: 576px) {
  .container {
    max-width: 95%;
  }
}
</style>
