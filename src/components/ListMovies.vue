<template>
  <div>
    <table v-for="movie in movies" :key="movie.id">
      {{ movie.title }}
    </table>
  </div>
</template>

<script>
export default {
  props : {
    movies: Array
  }
}



</script>
