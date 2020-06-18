
const boxes = document.querySelectorAll('.box');
const cartela = Math.ceil(Math.random() * 20);

document.querySelector('.cartela').style.backgroundImage = `url(images/${cartela}.png)`;

boxes.forEach(box => {
  box.addEventListener('click', (event) => {
    const selectedBox = event.target;
    selectedBox.classList.toggle('selected');

    if (document.querySelectorAll('.box.selected').length === 12) {
      document.querySelector('.mensagem').style.display = 'block';
    } else {
      document.querySelector('.mensagem').style.display = 'none';
    }
  })
});