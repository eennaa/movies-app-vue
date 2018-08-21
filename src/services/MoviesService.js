import axios from 'axios'

export default class Movies {
  constructor() {
    axios.default.baseURL = ' http://localhost:3000/api/'
  }

  
}

export const movie = new Movies()


// id, title, director, imageUrl, duration, releaseDate, genre
