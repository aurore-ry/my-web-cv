// function createStars(_i) {
//   for (let i; i; i--) {
//     drawStars();
//   }
// }

// function drawStars() {
//   let tmpStar = document.createElement("figure");
//   tmpStar.className = "star";
//   tmpStar.style.top = 100 * Math.random() + "%";
//   tmpStar.style.left = 100 * Math.random() + "%";
//   document.getElementById("stars").appendChild(tmpStar);
// }

// function selectStars() {
//   const stars = document.querySelectorAll(".star");
//   console.log(stars);
// }

// function animateStars() {
//   stars.forEach(function (el, i) {
//     TweenMax.to(el, Math.random() * 0.5 + 0.5, {
//       opacity: Math.random(),
//       onComplete: animateStars,
//     });
//   });
// }

// createStars(200);
// selectStars();
// animateStars();
