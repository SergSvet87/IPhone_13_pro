// Выбор телефонов при покупке
const tabsFunc = () => {
  // Получаю все элементы при выборе телефонов
  const tabs = document.querySelectorAll(".card-detail__change");

  // Получаю название товара
  const tabsTitle = document.querySelector(".card-details__title");

  // Получаю цену товара
  const tabsPrice = document.querySelector(".card-details__price");

  // Получаю картинку товара
  const tabsImage = document.querySelector(".card__image_item");

  // Получаю название модели товара
  const headTitle = document.querySelector("title");


  // Делаю нужное описание товара
  const tabsOptions = [{
    // 1 элемент(товар)
      name: "Graphite",
      memory: "128",
      price: 60000,
      image: "img/iPhone-graphite.webp",
      title: "Graphite",
    },
    {
    // 2 элемент(товар)
      name: "Silver",
      memory: "256",
      price: 65000,
      image: "img/iPhone-silver.webp",
      title: "Silver",
    },
    {
    // 3 элемент(товар)
      name: "Sierra Blue",
      memory: "512",
      price: 70000,
      image: "img/iPhone-sierra_blue.webp",
      title: "Sierra Blue",
    },
  ];

  // Делаю правильное описание товара
  const changeContent = (index) => {
    // Изменяю имя товара
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;

    // Изменяю цену товара
    tabsPrice.textContent = `${tabsOptions[index].price}₽`;

    // Изменяю иконку товара
    tabsImage.setAttribute("src", tabsOptions[index].image);

    // Изменяю название модели товара
    headTitle.textContent = `${tabsOptions[index].title}`;
  };

  // Изменяю активность элемента при нажатии на него
  const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
      tab.classList.remove("active");

      if (index === indexClickedTab) {
        tab.classList.add("active");
      }
    });

    changeContent(indexClickedTab);
  };

  // Вешаю обработчик на каждый элемент
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      changeActiveTabs(index);
    });
  });

  changeContent(0);
};

// Запускаю фунцию
tabsFunc();