// Отрисовка вспомогающих товаров на странице
const getData = () => {
  // Получаю список вспомогающих товаров
  const list = document.querySelector('.cross-sell__list')

  // Получаю кнопку Показать еще
  const btn = document.querySelector('.cross-sell__add')

  let stack = 4;
  let count = 1;

  // Отрисовываю вспомогающие товары
  const render = (data) => {
    list.innerHTML = '';

    data.forEach(item => {
      list.insertAdjacentHTML('beforeend', `
        <li>
          <article class="cross-sell__item">
            <img class="cross-sell__image" src="./${item.photo}" alt="${item.id}">
            <h3 class="cross-sell__title">${item.name}</h3>
            <p class="cross-sell__price">${item.price}₽</p>
            <button type="button" class="button button_buy cross-sell__button">Купить</button>
          </article>
        </li>
      `)
    });
  }

  // Отрезаю массива данных по 4 элемента
  const sliceArray = (data, index) => {
    return data.slice(0, index)
  }

  // Обработываю полученные данные и отображаю их на странице по 4 товара
  const changeData = (data) => {
    // Изначально 4 элемента
    const newStack = stack * count

    render(sliceArray(data, newStack))

    // Если длина массива будет больше элементов в БД
    if (data.length > newStack) {
      count++
    } else {
      // оттключаю кнопку Показать еще
      btn.style.display = 'none'
    }
  }

  // Получаю данные из базы данных с помощью строки json
  const getGoods = () => {
    fetch('https://proiphone-13-default-rtdb.firebaseio.com/db.json')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Данные были получены с ошибкой!')
        }
      })
      .then((data) => {
        changeData(data);
      })
      .catch((error) => {
        console.error(error.message);
      })
  }

  // Вешаю клик на кнопку Показать еще
  btn.addEventListener('click', getGoods)

  getGoods();
}

// Запускаю функцию
getData()