let bg = document.getElementById('bg1'),
    balloon = document.getElementById('balloon'),
    balloons = document.getElementById('balloons'),
    main = document.getElementById('main').offsetHeight,
    content = document.getElementById('content').offsetHeight,
    air = document.getElementById('air').offsetHeight,
    photos = document.getElementById('photos').offsetHeight,
    title = document.getElementById('title'),
    leftBlock = document.getElementById('left'),
    rightBlock = document.getElementById('right'),
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
    balloons.style.top = value  + 'px';
    if (value >= 500) {
        title.style.opacity = "0";
    }
    if (value <= 400 ) {
        title.style.opacity = "1";
    }
    if (value >= main - 100) {
        leftBlock.style.animationName = 'slideInleft';
        rightBlock.style.animationName = 'slideInRight';
    }
    if (value >= main + content + 400 ) {
        photo1.style.animationName = 'rotateAnimation1';
        photo2.style.animationName = 'rotateAnimation2';
        photo3.style.animationName = 'rotateAnimation3';
        photo4.style.animationName = 'rotateAnimation4';
        photo5.style.animationName = 'rotateAnimation5';
        photo6.style.animationName = 'rotateAnimation6';
    }
    if (value >= main + content + air + photos + 100) {
        photoText.style.animationName = 'slideInBottom';
        footer.style.animationName = 'slideInBottomFooter';
    }
})