//Constants
const myImage = document.querySelector('img');
const intro = document.querySelector('p');


//Image changer
myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/1.jpg') {
      myImage.setAttribute('src','images/2.jpg');
      intro.textContent = "Woah!";
    } else {
      myImage.setAttribute('src','images/1.jpg');
      intro.textContent = "Hello Work";
    }
}
