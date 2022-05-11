// Плавная прокрутка через нав-меню
const scrollFunc = () => {
	/*Получаю ссылки из нав-меню*/
	const links = document.querySelectorAll(".header-menu__item a");

	// Получаю ссылку с полными характеристиками товара
	const linkCharacteristics = document.querySelector(".card-details__link-characteristics"
	);

	// Создаю массив со всеми элементами(товарами)
	const newArray = [...links, linkCharacteristics];

	/*Вызываю полифил для поддержки кроссбарузерности(Сафари)*/
	seamless.polyfill();

	/*Перебираю массив*/
	newArray.forEach((element) => {
		/*вешаю обработчик события на клик по ссылке в нав-меню*/
		element.addEventListener("click", (event) => {
			/*отключаю действие по умолчанию на клик*/
			event.preventDefault();
			/*получаю id*/
			const id = element.getAttribute("href").substring(1);
			/*по полученному id получаю целевую область документа*/
			const section = document.getElementById(id);
			/*Проверяю на наличие целевой области (id !== '#')*/
			if (section) {
				/*Скролл с помощью scrollIntoView (не работает в Сафари)*/
				section.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			} else {
				/*Скролл с помощью полифила*/
				seamless.elementScrollIntoView(
					document.querySelector("#characteristics"),
					{
						behavior: "smooth",
						block: "center",
						inline: "center",
					});
			}
		})
	})
}

scrollFunc()

