const numbers = [10, 20, 30, 50, 235, 3000];

const filteredNumbers = numbers.filter(num => {
    const firstDigit = String(num)[0];
    return firstDigit === '1' || firstDigit === '2' || firstDigit === '5';
});

console.log(filteredNumbers);

//2. Цифры в убывающем порядке от 20 до 0

for (let i = 20; i >= 0; i--) {
    console.log(i);
}

//3. Светофор с использованием условной конструкции

const trafficLightMessages = {
    красный: 'Стоп',
    желтый: 'Приготовьтесь',
    зеленый: 'Идите'
};

const colorInput = prompt("Введите цвет светофора (красный, желтый, зеленый):").toLowerCase();

if (trafficLightMessages[colorInput]) {
    alert(trafficLightMessages[colorInput]);
} else {
    alert('Пожалуйста, вводите только цвета: красный, желтый, зеленый.');
}