import axios from 'axios'

export default class Movies {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:3000/api/'
  }

  getAll() {
    // return new Promise( (resolve) => {
    //   setTimeout( () => {
    //     resolve ([
    //       {
    //         id: 1,

    //       }
    //     ])
    //   }, 200 )
    // } )
    return axios.get('movies');
  }
}

export const movies = new Movies()


// id, title, director, imageUrl, duration, releaseDate, genre
