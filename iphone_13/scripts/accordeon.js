// Открытие листа полных характеристик товара
const accordeon = () => {
  // Получаю все элементы списка характерисик товара
  const chItems = document.querySelectorAll('.characteristics__item')

  // Перебор всех элементов
  chItems.forEach(item => {
    // Получаю кнопку элемента
    const chButton = item.querySelector('.characteristics__title');

    // Получаю скрытое описание товара
    const chContent = item.querySelector('.characteristics__description');

    // Обрабатываю кнопку по нажатию
    chButton.addEventListener('click', () => {
      if(chContent.classList.contains('open')) {
        chContent.style.height = ''
      } else{
        chContent.style.height = chContent.scrollHeight + 'px'
      }

      // Делаю блок нажатой кнопки активной
      chButton.classList.toggle('active')
      
      // Делаю блок с описанием открытым
      chContent.classList.toggle('open')
    })
  })
}

// Запуск функции
accordeon()