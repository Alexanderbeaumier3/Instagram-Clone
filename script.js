const imageContainer = document.querySelector('.image-container');

function changeImage() {
  
  fetch('https://source.unsplash.com/random/400x500')
    .then(response => {

      imageContainer.querySelector('img').src = response.url;
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
}


imageContainer.addEventListener('click', changeImage);