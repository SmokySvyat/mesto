let popupClassList = document.querySelector('.popup');
let userName = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__job');

function popupOpenClose() {
  if (popupClassList.classList.length > 1) {
    popupClassList.classList.toggle('popup_active');
  }
  else {
    popupClassList.classList.toggle('popup_active');
    document.querySelector('#name').value = userName.textContent;
    document.querySelector('#job').value = userJob.textContent;
  }  
}

function handleFormSubmit(evt) {
  evt.preventDefault(evt);
  let userNameNew = document.querySelector('#name').value;
  let userJobNew = document.querySelector('#job').value;
  // console.log(userNameNew);
  // console.log(userJobNew);
  // debugger
  userName.textContent = userNameNew;
  userJob.textContent = userJobNew;

  popupOpenClose();
}

let form = document.querySelector('.popup-form');
form.addEventListener('submit', handleFormSubmit);

let edit = document.querySelector('.profile__edit');
edit.addEventListener('click', popupOpenClose);

let close = document.querySelector('.popup__close');
close.addEventListener('click', popupOpenClose);