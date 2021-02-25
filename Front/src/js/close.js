


const close = () => {

    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.sidenav');
    const close = document.getElementById('ferme');

close.addEventListener('click', () => {
    navbar.style.left = -500 + "px";
    navbar.style.transition = " all 0.5s";
    burger.style.display = "block";
})




    }
    export default close;