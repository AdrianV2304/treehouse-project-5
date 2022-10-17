window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });

  const searchInput = document.getElementById('search');
  let photos = document.querySelectorAll('a.image');

  searchInput.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    // console.log(currentValue);
    // console.log(photos);
    photos.forEach(photo => {
        // console.log(photo.dataset);
        const caption = photo.dataset.caption.toLowerCase();
        const isMatchingPhoto = caption.includes(currentValue);
        console.log(isMatchingPhoto); 
        if (isMatchingPhoto){
            photo.style.display = 'block';
        } else {
            photo.style.display = 'none';
        }
    })
});

