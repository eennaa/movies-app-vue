<template>
   <form>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button @click.prevent="searchTermUpdated(searchTerm)" class="btn btn-outline-warning my-2 my-sm-0">Search</button>
    </form>
</template>

<script>
export default {

  methods: {
    searchTermUpdated(searchTerm){
      console.log(searchTerm)
    }
  }
}
</script>

<style>

</style>
