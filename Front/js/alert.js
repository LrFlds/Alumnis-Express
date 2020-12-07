const split = window.location.toString().split("#");
console.log(split);
alert(`Bienvenue, ${split[2]} ${split[1]} !`);