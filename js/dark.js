const dark = document.getElementById('dark-mode');
const container = document.querySelector('body');

dark.addEventListener('click',(e) =>{
    e.preventDefault();
    container.classList.toggle('switch');
})