// Отправка данных формы на сервер при покупке телефона
const sendForm = () => {

  // Получаю кнопку купить с доставкой, чтобы открыть модальное окно
  const btnOpenModal = document.querySelector('.card-details__button_delivery');

  // Получаю заголовок выранного товара
  const cardTitle = document.querySelector('.card-details__title');

  // Получаю модальное окно
  const modal = document.querySelector('.modal');

  // Получаю заголовок модального окна
  const modalTitle = modal.querySelector('.modal__title');

  // Получаю кнопку закрытия модального окна
  const modalClose = modal.querySelector('.modal__close');

  // Получаю форму модального окна
  const modalForm = modal.querySelector('form')

  // При клике на кнопку показываю модальное окно
  btnOpenModal.addEventListener('click', () => {
    modal.style.display = 'flex'
    modalTitle.textContent = cardTitle.textContent
  })

  // При клике на кнопку закрываю модальное окно
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
  })

  // На модальное окно повесил обработчик события сабмит(отправка данных)
  modalForm.addEventListener('submit', (event) => {
    // Отменил гет запрос (не перезагружается страница)
    event.preventDefault()

    // Вытянул все поля с окна
    const labels = modal.querySelectorAll('.modal__label')

    // Создал пустой объект с необходимыми свойствами
    const sendMessage = {}

    // Перебрал все поля
    labels.forEach(label => {
      const span = label.querySelector('span')
      const input = label.querySelector('input')

      // Отправляю данных на сервер
      sendMessage[span.textContent] = input.value;
    })

    // Метод отправки данных на сервер
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(sendMessage),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      // Уведомление о успешной отправке Запроса на сервер
      .then(() => {
        console.log('Отправлено!');
      })
  })
}

// Запускаю функцию
sendForm()