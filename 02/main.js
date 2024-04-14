const menus = document.querySelectorAll('.menu-icon');
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');

menus.forEach(menu => {
    menu.addEventListener('click', ()=> {
        if (menu.classList.contains('on')) {
            menu.classList.remove('on');
            line1.classList.remove('on1');
            line2.classList.remove('on2');
            line3.classList.remove('on3');
        } else {
            menu.classList.add('on');
            line1.classList.add('on1');
            line2.classList.add('on2');
            line3.classList.add('on3');
        }
        //alert("Clicado");
    });
});

/*
querySelectorAll está retornado para mim uma NodeList.
O que seria uma NodeList, todos os elementos filho presente no elemento para que está
sendo passado.

forEach vai fazer um loop em todos os elementos presente da minha div ou equivalente.

*/