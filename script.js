// header beginning
const button = document.querySelector(`[data-button]`);
const header = document.querySelector(`[data-header]`);
const miaInfo = document.querySelector(`[data-mia-info]`);
const leeInfo = document.querySelector(`[data-lee-info]`);

button.addEventListener(`click`, () => {
  header.classList.toggle(`active`);
});

window.addEventListener(`resize`, () => {
  if (window.innerWidth > 420 && header.classList.contains(`active`)) {
    header.classList.toggle(`active`);
  }
});
// header end

// welcome beginning
function showInfo(node) {
  node.style.visibility = `visible`;
  node.style.opacity = `1`;
}

function hideInfo(node) {
  node.style.visibility = `invisible`;
  node.style.opacity = `0`;
}
// welcome end

// nftSlideshow beginning
const slideshow = document.querySelector(`.slideshow`);
const fragment = document.createDocumentFragment();

// см файл __slideshow.scss этот кусок кода для анимации при наведении мышкой на картинку
// const enscaleImg = function (i, j, power) {
//   document.getElementById(`${i}${j}`).style.transform = `scale(${power})`;
// };

for (let i = 0; i < 3; i++) {
  for (let j = 1; j < 10; j++) {
    let img = document.createElement(`img`);
    img.src = `img/main/slideshow/nft (${j}).png`;
    img.classList.add(`slideshow__img`);

    let imgWrap = document.createElement(`div`);
    imgWrap.classList.add(`slideshow__img-container`);
    imgWrap.style.backgroundImage = `url=(img/main/slideshow/nft (${j}).png)`;

    imgWrap.append(img);
    slideshow.appendChild(imgWrap);
  }
}
// nftSlideshow end

// introduction beginning
class Member {
  static activeMember;
  static activeMemberImage =
    document.getElementsByClassName(`member__photo`)[0];

  constructor(name) {
    this.btn = document.getElementById(`${name}Btn`);
    this.details = document.getElementById(`${name}Details`);
    this.picSrc = `/img/main/introduction/${name}.png`;
    this.name = name;
    this.btn.addEventListener(`click`, () => Member.switchActiveTo(this));
  }

  static switchActiveTo(member) {
    member.btn.classList.toggle(`active`);
    member.details.classList.toggle(`active`);
    Member.activeMemberImage.src = member.picSrc;
    Member.activeMember.btn.classList.toggle(`active`);
    Member.activeMember.details.classList.toggle(`active`);
    Member.activeMember = member;
  }
}

const memberNames = [`Jack`, `Suni`, `Colin`];
const memberList = [];

memberNames.forEach((el) => memberList.push(new Member(el)));
Member.activeMember = memberList[0];

// introduction end

// FAQ beginning
class Question {
  constructor(btn, img, details) {
    this.btn = btn;
    this.img = img;
    this.details = details;
    this.btn.addEventListener(`click`, () => this.toggleShowDetails());
  }
  toggleShowDetails() {
    if (this.img.classList.contains(`question__to-details-pic__active`)) {
      this.details.classList.toggle(`question__details__active1`);
      setTimeout(() => {
        this.img.classList.toggle(`question__to-details-pic__active`);
        this.details.classList.toggle(`question__details__active`);
      }, 400);
    } else {
      this.img.classList.toggle(`question__to-details-pic__active`);
      this.details.classList.toggle(`question__details__active`);
      setTimeout(() => {
        this.details.classList.toggle(`question__details__active1`);
      }, 500);
    }
  }
}

questionBtns = document.getElementsByClassName(`question__to-details`);
questionBtnsImgs = document.getElementsByClassName(`question__to-details-pic`);
questionDtls = document.getElementsByClassName(`question__details`);

let questionsArray = [];
for (let i = 0; i < questionBtns.length; i++) {
  questionsArray.push(
    new Question(questionBtns[i], questionBtnsImgs[i], questionDtls[i])
  );
}
// FAQ end
