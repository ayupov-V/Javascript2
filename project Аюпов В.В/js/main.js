const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (obj, img='https://imgholder.ru/200x150/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson') => {
    return `<div class="product-item">
<img src="${img}" alt="Some img">
                <h3>${obj.title}</h3>
                <p>${obj.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};


const renderPage = list => {
 document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
 };
 renderPage(products);