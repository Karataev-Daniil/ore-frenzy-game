document.addEventListener('DOMContentLoaded', function() {
    let totalCoins = 100;        
    let totalCoal = 0;         
    let totalTin = 0;          
    let totalCopper = 0;       

    let totalCoalProduction = 0;       
    let totalTinProduction = 0;        
    let totalCopperProduction = 0; 
    
    let coalProfit = 1200;
    let tinProfit = 1200;
    let copperProfit = 1200;

    let coalUpgradeCost = 5;
    let tinUpgradeCost = 5;
    let copperUpgradeCost = 5;

    let fieldPassiveCoal = []; 
    let fieldPassiveTin = [];  
    let fieldPassiveCopper = []; 

    let totalingotTin = 0;     
    let totalingotCopper = 0;  

    // Функции для обновления интерфейса
    function updateInterface() {
        document.getElementById('totalCoins').textContent = totalCoins + " $";
        document.getElementById('totalCoal').textContent = totalCoal + " ед.";
        document.getElementById('totalCoalProduction').textContent = totalCoalProduction + " ед./1мин.";
    }

    // Добавление выпадающего списка для выбора ресурса перед созданием шахты
    const resourceSelect = document.createElement('select');
    resourceSelect.innerHTML = `
        <option value="">Выберите ресурс</option>
        <option value="coal">Уголь</option>
        <option value="tin">Олово</option>
        <option value="copper">Медь</option>
    `;
    
    document.querySelector('.add-mining').appendChild(resourceSelect);

    // Добавление новой шахты с выбором типа
    document.getElementById('addMiningField').addEventListener('click', function() {
        let resourceType = resourceSelect.value; // Получаем выбранный тип ресурса

        if (!resourceType) {
            alert("Пожалуйста, выберите ресурс для шахты.");
            return;
        }

        const newMiningField = document.createElement('div');
        let productionRate = 12; // Начальная скорость добычи
        let upgradeCost = 5; // Начальная стоимость улучшения

        // Присваиваем шахте соответствующий класс на основе выбранного ресурса
        newMiningField.classList.add('mining-field', `mining-${resourceType}-field`);

        // Установка картинки для шахты в зависимости от выбранного ресурса
        const resourceImg = {
            coal: 'img/coal.png',
            tin: 'img/tin.png',
            copper: 'img/copper.png'
        };

        // Интерфейс шахты
        newMiningField.innerHTML = `
            <div class="mining-field mining-${resourceType}-field">
                <div class="mining-field-icon">
                    <img src="${resourceImg[resourceType]}" alt="${resourceType}" class="resource-icon">
                </div>
                <div>
                    Добыча с ${resourceType === 'coal' ? 'угольных' : resourceType === 'tin' ? 'оловянных' : 'медных'} рудников: 
                    <span id="${resourceType}ProductionRate">${productionRate} ед./1мин.</span>
                </div>
                <div>
                    Прибыль: <span id="${resourceType}Profit">0 ед.</span>
                </div>
                <div>
                    Улучшение добычи (цена: <span id="${resourceType}UpgradeCost">${upgradeCost}</span>$):
                    <button id="upgrade${resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}">Улучшить добычу</button>
                </div>
            </div>
        `;

        // Добавляем шахту в DOM
        document.querySelector('.mining-fields').insertBefore(newMiningField, document.querySelector('.add-mining'));

        // Блокируем выбор ресурса, удаляя выпадающий список
        resourceSelect.disabled = true;
        
        // Функция для улучшения шахты (увеличение добычи на 2% и цены на 5%)
        newMiningField.querySelector(`#upgrade${resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}`).addEventListener('click', function() {
            if (totalCoins >= upgradeCost) { // Проверяем, хватает ли денег на улучшение
                totalCoins -= upgradeCost;   // Вычитаем стоимость улучшения

                // Увеличиваем скорость добычи на 2% в зависимости от ресурса
                if (resourceType === 'coal') {
                    totalCoalProduction *= 1.02;
                    document.getElementById('coalProductionRate').textContent = totalCoalProduction.toFixed(2) + ' ед./1мин.';
                } else if (resourceType === 'tin') {
                    totalTinProduction *= 1.02;
                    document.getElementById('tinProductionRate').textContent = totalTinProduction.toFixed(2) + ' ед./1мин.';
                } else if (resourceType === 'copper') {
                    totalCopperProduction *= 1.02;
                    document.getElementById('copperProductionRate').textContent = totalCopperProduction.toFixed(2) + ' ед./1мин.';
                }

                // Увеличиваем цену улучшения на 5%
                upgradeCost = Math.round(upgradeCost * 1.05);
                newMiningField.querySelector(`#${resourceType}UpgradeCost`).textContent = upgradeCost + ' $';

                updateInterface();
            } else {
                alert('Недостаточно денег для улучшения!');
            }
        });

        updateInterface();
    });

    updateInterface();
});