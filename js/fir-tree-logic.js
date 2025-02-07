document.addEventListener("DOMContentLoaded", function() {
    const forestsnowy = document.querySelector('.forest.snowy'); 
    const foreststandard = document.querySelector('.forest.standard');

    // Проверяем, найден ли элемент
    if (!forestsnowy) {
        return; 
    }
    // Проверяем, найден ли элемент
    if (!foreststandard) {
        return; 
    }

    // Массив для хранения позиций снежных елок
    const treessnowy = [
        { x: 100, y: 50 },
        { x: 80, y: 70 },
        { x: 60, y: 90 },
        { x: 90, y: 100 },
        { x: 40, y: 150 },
        { x: 140, y: 170 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 }
    ];

    // Массив для хранения позиций обычных елок
    const treesstandard = [
        { x: 100, y: 50 },
        { x: 80, y: 70 },
        { x: 60, y: 90 },
        { x: 90, y: 100 },
        { x: 40, y: 150 },
        { x: 140, y: 170 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 }
    ];

    // Функция для добавления елок в снежный лес
    function createForestsnowy() {
        treessnowy.forEach(tree => {
            const firTree = document.createElement('div');
            firTree.classList.add('body-fir-tree');

            // Добавляем 4 кроны
            for (let j = 0; j < 4; j++) {
                const crown = document.createElement('div');
                crown.classList.add('crown');
                firTree.appendChild(crown);
            }

            // Добавляем ствол
            const trunk = document.createElement('div');
            trunk.classList.add('trunk');
            firTree.appendChild(trunk);

            // Устанавливаем позиции
            firTree.style.position = 'absolute';
            firTree.style.top = tree.y + 'px';
            firTree.style.left = tree.x + 'px';

            // Добавляем елку в блок леса
            forestsnowy.appendChild(firTree);
        });
    }

    // Функция для добавления елок в снежный лес
    function createForeststandard() {
        treesstandard.forEach(tree => {
            const firTree = document.createElement('div');
            firTree.classList.add('body-fir-tree');

            // Добавляем 4 кроны
            for (let j = 0; j < 4; j++) {
                const crown = document.createElement('div');
                crown.classList.add('crown');
                firTree.appendChild(crown);
            }

            // Добавляем ствол
            const trunk = document.createElement('div');
            trunk.classList.add('trunk');
            firTree.appendChild(trunk);

            // Устанавливаем позиции
            firTree.style.position = 'absolute';
            firTree.style.top = tree.y + 'px';
            firTree.style.left = tree.x + 'px';

            // Добавляем елку в блок леса
            foreststandard.appendChild(firTree);
        });
    }

    // Вызываем функцию для создания леса
    // createForeststandard();
    // Вызываем функцию для создания леса
    // createForestsnowy();
});
