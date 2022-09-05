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

const showInfo = function (node) {
  node.style.visibility = `visible`;
  node.style.opacity = `1`;
};

const hideInfo = function (node) {
  node.style.visibility = `invisible`;
  node.style.opacity = `0`;
};

let imgContainer = document.querySelector(".nft-slideshow");
const fragment = document.createDocumentFragment();

for (let i = 0; i < 3; i++) {
  for (let i = 1; i < 10; i++) {
    let img = document.createElement("img");
    img.src = `img/main/nft-slideshow/nft (${i}).png`;
    img.classList.add("nft-pic");
    fragment.appendChild(img);
  }
}

const enscaleImg = function (node, power) {
  node.style.transform = `scale(${power})`;
};

imgContainer.appendChild(fragment);
