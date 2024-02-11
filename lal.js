const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.btn-yes');
const noBtn = document.querySelector('.btn-no');
const container = document.querySelector('.container');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

const myImg = document.getElementById("myImg");
const myImg1 = document.getElementById("myImg1");
const myImg2 = document.getElementById("myImg2");
const myButton = document.getElementById("myButton");

let imgState = 0;
let clickCount = 0;

myButton.addEventListener("click", function() {
  switch (imgState) {
    case 0:
      myImg.src = "js/img/1/lal5.gif";
      myImg1.src = "js/img/1/lal6.gif";
      myImg2.src = "js/img/1/lal2.gif";
      break;
    case 1:
      myImg.src = "js/img/2/lal4.gif";
      myImg1.src = "js/img/2/lal8.gif";
      myImg2.src = "js/img/2/lal9.gif";
      break;
    case 2:
      myImg.src = "js/img/3/lal11.gif";
      myImg1.src = "js/img/3/lal12.gif";
      myImg2.src = "js/img/3/lal13.gif";
      break;

    default:
      break;
  }

  imgState = (imgState + 1) % 3;
  clickCount++;

  updateButtonText();

  if (clickCount === 3) {
    myButton.disabled = true;
    yesBtn.disabled = true;
    noBtn.disabled = true;
  }
});

function updateButtonText() {
  switch (imgState) {
    case 0:
      question.innerHTML = 'Talk to me about details';
      break;
    case 1:
      question.innerHTML = 'Are you 100% sure???';
      break;
    case 2:
      question.innerHTML = 'So... wanna go out somewhere with me?';
      break;

    default:
      break;
  }
}

yesBtn.addEventListener('click', () => {
  updateButtonText();
});

noBtn.addEventListener('mouseover', () => {
  const containerRect = container.getBoundingClientRect();

  const i = Math.floor(Math.random() * (containerRect.width - noBtnRect.width)) + containerRect.left;
  const j = Math.floor(Math.random() * (containerRect.height - noBtnRect.height)) + containerRect.top;

  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';
});