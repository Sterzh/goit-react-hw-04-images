// import { Component } from 'react';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const MY_API_PIXABAY_KEY = '?key=34337026-7de7d7fed724711432526467d';
const quantityObjects = 10;
let page = 1;

export const Fetch = async requestValue => {
  try {
    const response = await axios.get(
      `${BASE_URL}${MY_API_PIXABAY_KEY}&q=${requestValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${quantityObjects}`
    );
    incrementPage();
    return response.data;
  } catch (error) {
    return error;
  }
};

function incrementPage() {
  page += 1;
}

export function resetPage() {
  page = 1;
}

// export Fetch;
// export resetPage;
