let popup = document.querySelector('.popup');
let userName = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__job');
let form = document.querySelector('.popup-form');
let edit = document.querySelector('.profile__edit');
let close = document.querySelector('.popup__close');
let nameValue = document.querySelector('#name');
let jobValue = document.querySelector('#job');

function popupOpenClose() {
    popup.classList.toggle('popup_active');
}

function handleFormSubmit(evt) {
  evt.preventDefault(evt);
  let userNameNew = nameValue.value;
  let userJobNew = jobValue.value;
  
  userName.textContent = userNameNew;
  userJob.textContent = userJobNew;

  popupOpenClose();
}

edit.addEventListener('click', () => {
  nameValue.value = userName.textContent;
  jobValue.value = userJob.textContent;

  popupOpenClose();
});
close.addEventListener('click', popupOpenClose);
form.addEventListener('submit', handleFormSubmit);