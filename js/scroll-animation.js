// if ('scrollRestoration' in history) {
//     history.scrollRestoration = 'manual'; 
// }

// window.addEventListener('load', function () {
//     const heroDecor = document.querySelector('.hero-decor');
    
//     if (!heroDecor) return; 
    
//     window.scrollTo(0, 0);
// });

window.addEventListener('scroll', function () {
    const heroDecor = document.querySelector('.hero-decor');
    
    if (!heroDecor) return;

    let scrollPosition = window.scrollY;
    let maxScroll = 530;

    if (scrollPosition > maxScroll) {
        scrollPosition = maxScroll;
    }

    // Настройка скорости от прокрутки слоёв
    let celestialbodiesSpeed = 0.3;
    let mountainBackSpeed = 1.0;
    let mountainMidSpeed = 0.9;
    let mountainFrontSpeed = 0.8;
    let firtreesSpeed = 0.77;
    let meadowsBackSpeed = 0.7;
    let meadowsMidSpeed = 0.6;
    let groundFrontSpeed = -0.15;

    // Прокрутка слоёв
    document.querySelector('.celestial-bodies').style.transform = 'translateY(' + scrollPosition * celestialbodiesSpeed + 'px)';
    document.querySelector('.mountain-back').style.transform = 'translateY(' + scrollPosition * mountainBackSpeed + 'px)';
    document.querySelector('.mountain-mid').style.transform = 'translateY(' + scrollPosition * mountainMidSpeed + 'px)';
    document.querySelector('.mountain-front').style.transform = 'translateY(' + scrollPosition * mountainFrontSpeed + 'px)';
    document.querySelector('.fir-trees').style.transform = 'translateY(' + scrollPosition * firtreesSpeed + 'px)';
    document.querySelector('.meadows-back').style.transform = 'translateY(' + scrollPosition * meadowsBackSpeed + 'px)';
    document.querySelector('.meadows-mid').style.transform = 'translateY(' + scrollPosition * meadowsMidSpeed + 'px)';
    document.querySelector('.ground-front').style.transform = 'translateY(' + scrollPosition * groundFrontSpeed + 'px)';

    // Солнце и луна
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');

    if (scrollPosition >= 0 && scrollPosition <= maxScroll) {
        const sunPosition = (scrollPosition / maxScroll) * 60;
        sun.style.left = `${55 + sunPosition}%`;
        sun.style.top = `${-150 + (scrollPosition / maxScroll) * 350}px`;

        const moonPosition = (-100 + (scrollPosition / maxScroll) * 100);
        moon.style.left = `${55 + moonPosition}%`;
        moon.style.top = `${350 + (scrollPosition / maxScroll) * -150}px`;

        // Изменение цвета неба по линейному градиенту
        const colorTransition = scrollPosition / maxScroll;
        const startColor1 = { r: 0, g: 191, b: 255 }; // #00BFFF
        const startColor2 = { r: 135, g: 206, b: 235 }; // #87CEEB
        const startColor3 = { r: 176, g: 224, b: 230 }; // #B0E0E6

        // Цвета градиента для ночного неба
        const endColor1 = { r: 44, g: 62, b: 80 }; // #2c3e50
        const endColor2 = { r: 52, g: 73, b: 94 }; // #34495e
        const endColor3 = { r: 28, g: 40, b: 51 }; // #1c2833

        // Рассчитываем текущие цвета на основе прокрутки
        const r1 = Math.round(startColor1.r + (endColor1.r - startColor1.r) * colorTransition);
        const g1 = Math.round(startColor1.g + (endColor1.g - startColor1.g) * colorTransition);
        const b1 = Math.round(startColor1.b + (endColor1.b - startColor1.b) * colorTransition);

        const r2 = Math.round(startColor2.r + (endColor2.r - startColor2.r) * colorTransition);
        const g2 = Math.round(startColor2.g + (endColor2.g - startColor2.g) * colorTransition);
        const b2 = Math.round(startColor2.b + (endColor2.b - startColor2.b) * colorTransition);

        const r3 = Math.round(startColor3.r + (endColor3.r - startColor3.r) * colorTransition);
        const g3 = Math.round(startColor3.g + (endColor3.g - startColor3.g) * colorTransition);
        const b3 = Math.round(startColor3.b + (endColor3.b - startColor3.b) * colorTransition);

        heroDecor.style.background = `linear-gradient(to bottom, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}), rgb(${r3}, ${g3}, ${b3}))`;
    }
});

// document.addEventListener('DOMContentLoaded', function () {
//     const scrollButton = document.getElementById('scrollButton');
    
//     // Проверка, есть ли кнопка scrollButton
//     if (!scrollButton) return;

//     document.body.classList.add('lock-scroll');
//     let autoScrollInterval;

//     scrollButton.addEventListener('click', function () {
//         scrollButton.style.display = 'none';

//         let currentScroll = 0;
//         const scrollTarget = 530;
//         const scrollSpeed = 7;

//         autoScrollInterval = setInterval(function () {
//             currentScroll += scrollSpeed;
//             window.scrollTo(0, currentScroll);

//             if (currentScroll >= scrollTarget) {
//                 clearInterval(autoScrollInterval);
//                 document.body.classList.remove('lock-scroll');
//             }
//         }, 16);
//     });

//     // Блокировка ручной прокрутки через колесо мыши и клавиатуру
//     window.addEventListener('wheel', function (e) {
//         if (document.body.classList.contains('lock-scroll')) {
//             e.preventDefault();
//         }
//     }, { passive: false });

//     window.addEventListener('keydown', function (e) {
//         const keys = [32, 37, 38, 39, 40]; // Коды клавиш: пробел и стрелки
//         if (keys.includes(e.keyCode) && document.body.classList.contains('lock-scroll')) {
//             e.preventDefault();
//         }
//     });
// });