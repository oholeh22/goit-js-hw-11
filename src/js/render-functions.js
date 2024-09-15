export function renderImages(images, galleryElement) {
    if (!images || images.length === 0) {
        iziToast.warning({
            title: 'No results',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            timeout: 5000,
        });
        return;
    }
  
    const markup = images.map(image => {
      return `
        <li class="gallery-item">
          <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" />
          </a>
          <div class="gallery-item-info">
            <p class="stats">Likes: ${image.likes}</p>
            <p class="stats">Views: ${image.views}</p>
            <p class="stats">Comments: ${image.comments}</p>
            <p class="stats">Downloads: ${image.downloads}</p>
          </div>
        </li>
      `;
    }).join('');
  
    console.log('Markup:', markup); 
    galleryElement.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery(galleryElement) {
    galleryElement.innerHTML = ''; 
}
