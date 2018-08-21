<template>
  <div>
    lalallalala i can't hear you
    <list-movies :movies="movies" > </list-movies>
  </div>

</template>

<script>
  import { movies } from '../services/MoviesService.js'
  import ListMovies from '../components/ListMovies.vue'

  export default {
    components: {
      ListMovies
    },

    data() {
      return {
        movies: []
      }
    },

    beforeRouteEnter(to, from, next) {
      movies
      .getAll()
      .then( (response) => {
        next( (vm) => {
          vm.movies = response.data;
        });
      })
      .catch( (error) => console.log('error'))
    }
  }
</script>
