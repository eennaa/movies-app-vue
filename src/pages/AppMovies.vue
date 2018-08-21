<template>
  <div>
    lalallalala i can't hear you
    
    <movie-row v-for="movie in movies" :key="movie.id" :movie="movie" > </movie-row>
  </div>

</template>

<script>
  import { movies } from '../services/MoviesService.js'
  import MovieRow from '../components/MovieRow.vue'

  export default {
    components: {
      MovieRow
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
