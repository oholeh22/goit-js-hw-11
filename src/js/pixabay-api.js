export function fetchImages(query) {
    const apiKey = '45999578-eb7202f1a65d28d69ebdccc58';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
  
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => data.hits)
      .catch(error => {
        console.error('Error fetching images:', error);
        throw error;
      });
}
