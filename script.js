// header beginning
let button = document.querySelector(`[data-button]`);
let header = document.querySelector(`[data-header]`);
let miaInfo = document.querySelector(`[data-mia-info]`);
let leeInfo = document.querySelector(`[data-lee-info]`);

button.addEventListener(`click`, () => {
  header.classList.toggle(`active`);
});

window.addEventListener(`resize`, () => {
  if (window.innerWidth > 420 && header.classList.contains(`active`)) {
    header.classList.toggle(`active`);
  }
});
// header ending

// welcome beginning
function showInfo (node) {
  node.style.visibility = `visible`;
  node.style.opacity = `1`;
};

function hideInfo (node) {
  node.style.visibility = `invisible`;
  node.style.opacity = `0`;
};
// welcome ending

// nftSlideshow beginning 
let imgContainer = document.querySelector(`.nft-slideshow`);
const fragment = document.createDocumentFragment();

const enscaleImg = function (i, j, power) {
  document.getElementById(`${i}${j}`).style.transform = `scale(${power})`;
};

for (let i = 0; i < 3; i++) {
  for (let j = 1; j < 10; j++) {
    let img = document.createElement(`img`);

    img.src = `img/main/nft-slideshow/nft (${j}).png`;
    img.classList.add(`nft-pic`);

    // почему то работает только без "@keyframes slide", а почему непонятно
    img.addEventListener(`mouseover`, () => {
      img.style.transform = `scale(2)`;
      img.style.zIndex = `2`;
    });
    img.addEventListener(`mouseout`, () => {
      img.style.transform = `scale(1)`;
      img.style.zIndex = `1`;
    });

    imgContainer.appendChild(img);
  }
}
// nftSlideshow ending

