let bg = document.getElementById('bg1'),
    balloon = document.getElementById('balloon'),
    balloons = document.getElementById('balloons'),
    main = document.getElementById('bg1'),
    content = document.getElementById('content'),
    leftBlock = document.getElementById('left'),
    rightBlock = document.getElementById('right'),
    contentHeight = content.offsetHeight,
    mainHeight = main.offsetHeight,
    photo1 = document.getElementById('photo1'),
    photo2 = document.getElementById('photo2'),
    photo3 = document.getElementById('photo3'),
    photo4 = document.getElementById('photo4'),
    photo5 = document.getElementById('photo5'),
    photo6 = document.getElementById('photo6'),
    footer = document.getElementById('footer'),
    photoText = document.getElementById('photo-text');


window.addEventListener('scroll', function()  {
    let value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    balloon.style.top = -value * 0.9 + 'px';
    balloons.style.top = value + 'px';

    console.log(value)
    console.log(mainHeight)

    if (value > mainHeight / 2) {
        leftBlock.style.animationName = 'slideInleft';
        rightBlock.style.animationName = 'slideInRight';
    }
    if (value > mainHeight) {
        photo1.style.animationName = 'rotateAnimation1';
        photo2.style.animationName = 'rotateAnimation2';
        photo3.style.animationName = 'rotateAnimation3';
        photo4.style.animationName = 'rotateAnimation4';
        photo5.style.animationName = 'rotateAnimation5';
        photo6.style.animationName = 'rotateAnimation6';
    }
    if (value > mainHeight * 2.7) {
        photoText.style.animationName = 'slideInBottom';
        footer.style.animationName = 'slideInBottomFooter';
    }
})