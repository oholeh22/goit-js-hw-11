export function renderImages(images, galleryElement) {
    if (!images || images.length === 0) {
      console.warn('No images to display');
      return;
    }
  
    const markup = images.map(image => {
      return `
        <li class="gallery-item">
          <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" />
          </a>
          <div class="gallery-item-info">
            <p class="tags">${image.tags}</p>
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
