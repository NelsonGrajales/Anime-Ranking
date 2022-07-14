const sliderContainer = document.querySelector('.slider__container')
const slider = document.querySelector('.slider')
/*const buttonLeft = document.getElementById('button-left')
const buttonRight = document.getElementById('button-right')
*/
const sliderElements = document.querySelectorAll('.slider__element')

const rootStyle = document.documentElement.style;

let isInTransition = false

let sliderCounter = 0;

const DIRECTION = {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
}

const getTransformValue = () =>
    Number(rootStyle.getPropertyValue('--slide-transform').replace('px',''))

const reoderSlide = () => {
    const TransformValue = getTransformValue();
    rootStyle.setProperty('--transition', 'none')
    if(sliderCounter === sliderElements.length - 1){
        slider.appendChild(slider.firstElementChild)
        rootStyle.setProperty('--slide-transform', `${TransformValue + sliderElements[sliderCounter].scrollWidth}px`)
        sliderCounter--;
    }else if(sliderCounter===0){
        slider.prepend(slider.lastElementChild)
        rootStyle.setProperty('--slide-transform', `${TransformValue - sliderElements[sliderCounter].scrollWidth}px`)
        sliderCounter++
    }

    isInTransition = false;
}

const moveSlide = (direction) => {
    if(isInTransition) return
    const TransformValue = getTransformValue();
    rootStyle.setProperty('--transition', 'transform 1s')
    isInTransition = true;
    if(direction === DIRECTION.LEFT){
        rootStyle.setProperty('--slide-transform', `${TransformValue + sliderElements[sliderCounter].scrollWidth}px`)
        sliderCounter--;
    }else if(direction === DIRECTION.RIGHT){
        rootStyle.setProperty('--slide-transform', `${TransformValue - sliderElements[sliderCounter].scrollWidth}px`)
        sliderCounter++
    }
}

setInterval(() => {
    moveSlide(DIRECTION.RIGHT)
}, 3000);

/*
buttonLeft.addEventListener('click', ()=>moveSlide(DIRECTION.LEFT))
buttonRight.addEventListener('click', ()=>moveSlide(DIRECTION.RIGHT))
*/
slider.addEventListener('transitionend', reoderSlide)

reoderSlide()