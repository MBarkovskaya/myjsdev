"use strict"

window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none'; ---> после добавления spec.css с дополнительными стилями добавились 3 новых класса
            //        'show', 'fade', 'hide' - будем использовать их вместо объявления стиля sytle.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
             item.classList.remove('tabheader__item_active');
        })
    }

    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block'; ---> после добавления spec.css с дополнительными стилями добавились 3 новых класса
        // 'show', 'fade', 'hide' - будем использовать их вместо объявления стиля sytle.display = 'block';
        tabsContent[i].classList.add('show', 'fade')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
             tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
             });
        }
    });
});