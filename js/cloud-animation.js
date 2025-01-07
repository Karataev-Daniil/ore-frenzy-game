document.addEventListener('DOMContentLoaded', function() {
    const cloudBlock = document.querySelector('.cloud-block'); // Ищем элемент с классом .cloud-block
    
    if (cloudBlock) { // Проверяем, существует ли элемент
        const delayBetweenClouds = 2000; // Задержка между появлением облаков
        const maxClouds = 30; // Максимальное количество облаков

        function createCloud(i) {
            const cloud = document.createElement('div');
            cloud.classList.add('cloud', `cloud-${i % 3 + 1}`); // Добавляем класс для облака

            // Установка случайной высоты для анимации
            const randomHeight = Math.random() * 200 + 30; 
            cloud.style.setProperty('--startY', `${randomHeight}px`); 

            const randomX = Math.random() * 10 - 5; 
            cloud.style.setProperty('--randomX', `${randomX}px`); 

            const randomDuration = Math.random() * (55 - 40) + 40; // Случайная продолжительность анимации
            cloud.style.animationDuration = `${randomDuration}s`; 
            cloud.style.top = `${randomHeight}px`; 

            cloudBlock.appendChild(cloud); // Добавляем облако в .cloud-block

            // Удаляем облако после завершения анимации
            cloud.addEventListener('animationend', () => {
                cloud.remove(); 
            });
        }

        let cloudIndex = 0;

        // Интервал для создания облаков
        setInterval(() => {
            const clouds = document.querySelectorAll('.cloud'); 

            if (clouds.length < maxClouds) { 
                createCloud(cloudIndex);
                cloudIndex++;
            }
        }, delayBetweenClouds);
    }
});