<template>
  <div>
    <ul>
      <li>id: {{ movie.id }}</li>
      <li>Title: {{ movie.title }}</li>
      <li>Director: {{ movie.director }}</li>
      <li>Image: {{ movie.imageUrl }}</li>
      <li>Duration: {{ movie.duration }}</li>
      <li>Release date: {{ movie.releaseDate }}</li>
      <li>Genre: {{ movie.genre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props : {
    movie: {
      type: Object,
      required: true
    }
  }
}

// id, title, director, imageUrl, duration, releaseDate, genre


</script>
