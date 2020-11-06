/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

if (typeof window !== 'undefined') {
    if (!window.document) {
        window.document = {};
    }
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        bg = document.querySelector('.promo__bg'),
        content = document.getElementsByClassName('promo__content'),
        genre = bg.querySelector('.promo__genre'),
        film = document.querySelector(".promo__interactive-item"),
        films = document.querySelectorAll(".promo__interactive-item");
    adv.forEach(item=> {
      item.remove();
    });
    genre.textContent = "Драма";
    bg.style.cssText = "background: url('img/bg.jpg')";
    // mine example
    films.forEach(item => {
        item.innerHTML=""
    });
    function exercise() {
        movieDB.movies.sort();
        films.forEach((item, i) => {
            films[i].textContent = `${i+1}. ` + movieDB.movies[i]
        });
    }
    exercise();
    // lector example
    // movieDB.movies.sort();
    // movieDB.movies.forEach((item, i) => {
    //        film.innerHTML += `
    //        <li class="promo__interactive-item">${i + 1}. ${item}
    //        <div class="delete"></div>
    //        </li>`;
    // })
}