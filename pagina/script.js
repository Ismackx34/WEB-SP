// function App() {}

// window.onload = function(event) {
//     let app = new App();
//     window.app = app;
// }

// App.prototype.processingButton = function(event) {
//     const btn = event.currentTarget;
//     const carruselList = event.currentTarget.parentNode;
//     const track = event.currentTarget.parentNode.querySelector('#track');
//     const carrusel = track.querySelectorAll('.carrusel');
//     const carruselWidth = carrusel[0].offsetWidth;
//     const trackWidth = track.offsetWidth;
//     const listWidth = carruselList.offsetWidth;

//     track.style.transition = "left 0.5s ease";

//     track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
//     btn.dataset.button == "button-prev" ? prevAction(leftPosition, carruselWidth, track, carrusel.length) : nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track, carrusel.length);
// }

// let prevAction = (leftPosition, carruselWidth, track, numItems) => {
//     if (leftPosition > 0) {
//         track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
//     } else {
//         track.style.left = `${-1 * (carruselWidth * (numItems - 1))}px`; // Vuelve al final
//     }
// }

// let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track, numItems) => {
//     if (leftPosition < (trackWidth - listWidth)) {
//         track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
//     } else {
//         track.style.left = `0px`; // Vuelve al principio
//     }
// }
