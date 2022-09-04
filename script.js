let button = document.querySelector(`[data-button]`);
let header = document.querySelector(`[data-header]`);
let miaInfo = document.querySelector(`[data-mia-info]`);
let leeInfo = document.querySelector(`[data-lee-info]`);
console.log(miaInfo, leeInfo);

button.addEventListener(`click`, () => {
  header.classList.toggle(`active`);
});

window.addEventListener(`resize`, () => {
  if (window.innerWidth > 420 && header.classList.contains(`active`)) {
    header.classList.toggle(`active`);
  }
});

const showInfo = function (node) {
  node.style.visibility = `visible`;
  node.style.opacity = `1`;
}

const hideInfo = function (node) {
  node.style.visibility = `invisible`;
  node.style.opacity = `0`;
}