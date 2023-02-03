let popupClassList = document.querySelector('.popup-bg');
let userName = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__job');
let form = document.querySelector('.popup-form');
let edit = document.querySelector('.profile__edit');
let close = document.querySelector('.popup__close');
let nameValue = document.querySelector('#name');
let jobValue = document.querySelector('#job');

function popupOpenClose() {
    popupClassList.classList.toggle('popup-bg_active');
    getValueNameJob();
}

function getValueNameJob() {
    nameValue.value = userName.textContent;
    jobValue.value = userJob.textContent;
}

function handleFormSubmit(evt) {
  evt.preventDefault(evt);
  let userNameNew = nameValue.value;
  let userJobNew = jobValue.value;
  // console.log(userNameNew);
  // console.log(userJobNew);
  // debugger
  userName.textContent = userNameNew;
  userJob.textContent = userJobNew;

  popupOpenClose();
}

form.addEventListener('submit', handleFormSubmit);
edit.addEventListener('click', popupOpenClose);
close.addEventListener('click', popupOpenClose);