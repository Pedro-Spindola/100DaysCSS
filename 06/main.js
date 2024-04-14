const imagem = document.querySelector('.imagem img');
const c1 = document.querySelector('.circulo1');
const c2 = document.querySelector('.circulo2');

imagem.addEventListener("mouseenter", () => {
    c1.classList.add('rotate1');
    c2.classList.add('rotate2');
});

imagem.addEventListener("mouseleave", () => {
    c1.classList.remove('rotate1');
    c2.classList.remove('rotate2');
});
