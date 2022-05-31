Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

let images = [...document.querySelectorAll('.image_carousel')];
let slider = document.querySelector('.slider');
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = 0.05;
window.addEventListener('resize', init)

images.forEach((image, index) => {
    image.style.backgroundImage = `url(./images/${index+1}.jpg)`
  })

  function lerp(start, end, t) {
    return start * (1-t) + end * t;
}
function setTransform(el, transform) {
    el.style.transform = transform;
}
function init() {
    sliderWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderWidth/images.length;
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`
}
function animate() {
    current = parseFloat(lerp(current, target, ease)).toFixed(2);
    target = window.scrollY;
    setTransform(slider, `translateX(${-current}px)`)
    animateImages()
    requestAnimationFrame(animate)
}
function animateImages() {
    let ratio = current / imageWidth;
    let intersectionRatioValue;
    images.forEach((image, index) => {
      intersectionRatioValue = ratio - (index * 0.7)
      setTransform(image, `translateX(${intersectionRatioValue * 70}px)`)
    })
   }
   init()
   animate()