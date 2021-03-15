import axios from 'axios';
const apiKey = process.env.REACT_APP_API_KEY;


export const links = [
  {
    id: 1,
    filter: 'ebooks',
    code: 'isbn&ebooks&orderBy=newest',
    // books:  async function(){
    //   const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.code}&key=${apiKey}&maxResults=5`);
    //   return response.data.items;
    // }
  },
  {
    id: 2,
    filter: 'free-ebooks',
    code: 'isbn&free-ebooks&orderBy=relevance',
    // books:  async function(){
    //   const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.code}&key=${apiKey}&maxResults=5`);
    //   return response.data.items;
    // }
  },
  {
    id: 3,
    filter: 'paid-ebooks',
    code: 'isbn&paid-ebooks&orderBy=newest',
    // books:  async function(){
    //   const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.code}&key=${apiKey}&maxResults=5`);
    //   return response.data.items;
    // }
  },
  {
    id: 4,
    filter: 'download',
    code: 'isbn&full&showPreorders=true',
    // books:  async function(){
    //   const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.code}&key=${apiKey}&maxResults=5`);
    //   return response.data.items;
    // }
  }
]
