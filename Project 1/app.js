
let imageContainer = document.querySelector('.images-container');

let imageArray= ['img/james-sullivan-x8l63IUeuwQ-unsplash.jpg', 'img/jason-ortego-TznjqhCHR9g-unsplash.jpg', 'img/john-fowler-03Pv2Ikm5Hk-unsplash.jpg', 'img/mert-atakan-chc-oAL0gBU-unsplash.jpg','img/stas-parechyn-Xa2ICcPqUew-unsplash.jpg' ];
let headingArray = ['Sunset Ride', 'Ocean View', 'Starry Night', 'Sunset Beach', 'Waves on Sand'];
for(let i = 0; i <= 4; i++) {
    //create elements
   let imageDiv = document.createElement('div');
   let imageText = document.createElement('h5');
   //set Image url, classes and append to the container
   imageDiv.style.backgroundImage = "url(" + imageArray[i] + ")";
   imageDiv.classList.add('image-template')
   imageDiv.classList.add(`image-${i}`);
   imageContainer.appendChild(imageDiv);
   
   
   //Set Text classes, styles, content
   imageDiv.addEventListener('click', () => {
    imageText.textContent = headingArray[i]
    imageText.classList.add('text-template');
    imageText.classList.toggle('active-text');
       setTimeout(function(){
         imageDiv.appendChild(imageText);
        }, 700);  
   }); 
};

//selecting the 5 images (this is not a dynamic program would have to refactor and create an object that used mock JSON or an API)
let image1 = document.querySelector('.image-0');
let image2 = document.querySelector('.image-1');
let image3 = document.querySelector('.image-2');
let image4 = document.querySelector('.image-3');
let image5 = document.querySelector('.image-4');

image1.addEventListener('click', () => {
       image1.classList.toggle('active-image');
       if(image1.classList.contains('active-image')){
       image2.classList.remove('active-image');
       image3.classList.remove('active-image');
       image4.classList.remove('active-image');
       image5.classList.remove('active-image');
    
   }
});
   image2.addEventListener('click', () => {
    image2.classList.toggle('active-image');
       if(image2.classList.contains('active-image')){
       image1.classList.remove('active-image');
       image3.classList.remove('active-image');
       image4.classList.remove('active-image');
       image5.classList.remove('active-image');
        }
    });
image3.addEventListener('click', () => {
image3.classList.toggle('active-image');
       if(image3.classList.contains('active-image')){
       image1.classList.remove('active-image');
       image2.classList.remove('active-image');
       image4.classList.remove('active-image');
       image5.classList.remove('active-image');
   }
});
   image4.addEventListener('click', () => {
    image4.classList.toggle('active-image');
       if(image4.classList.contains('active-image')){
       image1.classList.remove('active-image');
       image2.classList.remove('active-image');
       image3.classList.remove('active-image');
       image5.classList.remove('active-image');
        }
    });
   image5.addEventListener('click', () => {
    image5.classList.toggle('active-image');
       if(image5.classList.contains('active-image')){
       image1.classList.remove('active-image');
       image2.classList.remove('active-image');
       image3.classList.remove('active-image');
       image4.classList.remove('active-image');
        }
    });


