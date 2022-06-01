//carousel

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

//light-dark mode

let switchMode = false;
document.querySelector('.mode').addEventListener('click', () => {
    if (switchMode == false){
        switchMode = true;
        var body = document.querySelector('body');
        body.setAttribute('class', 'darkMode');
    }else{
        switchMode = false;
        document.querySelector('body').setAttribute('class', 'lightMode');
    }
})

// hover-pop-image

const pokePop = Array.from(document.querySelectorAll('.poke'));
pokePop.forEach((name) => {
    name.addEventListener('mouseover', () => {
        const sprite = new Image();
        sprite.src = `../poke_pop_images/${name.innerText}.png`;
        sprite.style.position = 'absolute';
        sprite.style.left = '0';
        sprite.style.transform = 'translateY(-100%)'
        sprite.style.height = '400%'
        if (name.contains(sprite)) return
        if (name.hasChildNodes()) {
            name.innerHTML = name.innerText;
        }
        name.appendChild(sprite)
    })
})
pokePop.forEach((name) => {
    name.addEventListener('mouseleave', () => {
        name.innerHTML = name.innerText;

    })
})

//col

let pictures = document.querySelectorAll('.image');
var clicked = false;
pictures.forEach (pic => {
    pic.addEventListener('click', () => {
        if(clicked == false) {
            clicked = true;
            pic.style.transform = "scale(2)";
            pic.style.transition = "transform 0.50s ease";
            // p inner pic = "text"
        }
        else {
            clicked = false;
            pic.style.transform = "scale(1)";
            pic.style.transition = "transform 0.50s ease";            
          }
    })
})

//chasing circle

let chaser = document.getElementById('chaser');
document.getElementById('chaserBox').addEventListener('mousemove', function(e){
    console.log(e);
    chaser.style.marginLeft = e.clientX-20-68+'px';
    chaser.style.marginTop = e.clientY-123-230+'px';
})

//letters

Array.from(document.querySelectorAll(".letter")).forEach(el => {
  el.innerText = randomLetter();
});

function randomLetter(){
   const alphabet = "abcdefghijklmnopqrstuvwxyz"
   return alphabet[Math.floor(Math.random() * alphabet.length)]
}
