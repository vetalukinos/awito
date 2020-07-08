'use strict';

const modalAdd = document.querySelector('.modal__add'),
    addAd = document.querySelector('.add__ad'),
    modalBtnSubmit = document.querySelector('.modal__btn-submit'),
    modalSubmit = document.querySelector('.modal__submit'),
    Catalog = document.querySelector('.catalog'),
    modalItem = document.querySelector('.modal__item');

/*Open First Modal*/
addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true;
});

/*Close First Modal*/
modalAdd.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('modal__close') || target === modalAdd) {
        modalAdd.classList.add('hide');
        modalSubmit.reset();
    }
});

/*Open Second Modal*/
Catalog.addEventListener('click', (event) => {
    const target = event.target;
    if (target.closest('li')) {
        modalItem.classList.remove('hide');
    }
});

/*Close Second Modal*/
modalItem.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('modal__close') || target === modalItem) {
        modalItem.classList.add('hide');
    }
});

/*Close modal on click to "Escape"*/
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        modalAdd.classList.add('hide');
        modalItem.classList.add('hide');
    }
});






























