document.addEventListener('DOMContentLoaded', function() {
    const cloudBlock = document.querySelector('.cloud-block');

    if (cloudBlock) {
        const delayBetweenClouds = 2000;
        const maxClouds = 30;
        const initialClouds = 25;

        function createCloud(i, initial = false) {
            const cloud = document.createElement('div');
            cloud.classList.add('cloud', `cloud-${i % 3 + 1}`);

            const randomHeight = Math.random() * 200 + 30;
            cloud.style.setProperty('--startY', `${randomHeight}px`);

            const randomX = Math.random() * 10 - 5;
            cloud.style.setProperty('--randomX', `${randomX}px`);

            const randomDuration = Math.random() * (55 - 40) + 40;
            cloud.style.animationDuration = `${randomDuration}s`;
            cloud.style.top = `${randomHeight}px`;

            if (initial) {
                cloud.style.left = `${Math.random() * 100}%`;
            }

            cloudBlock.appendChild(cloud);

            cloud.addEventListener('animationend', () => {
                cloud.remove();
            });
        }

        let cloudIndex = 0;

        for (let i = 0; i < initialClouds; i++) {
            createCloud(cloudIndex, true);
            cloudIndex++;
        }

        setInterval(() => {
            const clouds = document.querySelectorAll('.cloud');

            if (clouds.length < maxClouds) {
                createCloud(cloudIndex);
                cloudIndex++;
            }
        }, delayBetweenClouds);
    }
});