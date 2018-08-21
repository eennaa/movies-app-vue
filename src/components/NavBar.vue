<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">Movies <i class="fas fa-film"></i> </a>
      <movie-search />   
    </nav>
  </div>
</template>


<script>
import MovieSearch from './MovieSearch.vue'
export default {
  components: {
    MovieSearch
  }
}
</script>
