import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api'; 
import { renderImages, clearGallery } from './js/render-functions'; 

let lightbox = new SimpleLightbox('.gallery-list a', {});

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const searchInput = document.getElementById('search-input').value.trim();
  
    if (!searchInput) {
        iziToast.error({ message: 'Please enter a search word.' });
        return;
    }

    const galleryList = document.getElementById('gallery');
    clearGallery(galleryList);
  
    fetchImages(searchInput)
      .then(images => {
        renderImages(images, galleryList);
        lightbox.refresh(); 
      })
      .catch(error => console.error('Error fetching images:', error));
});




