function popupOpenClose() {
  let popupClassList = document.querySelector('.popup');

  if (popupClassList.classList.length > 1) {
    popupClassList.classList.remove('active');
  }
  else {
    popupClassList.classList.add('active');
  }
}

function handleFormSubmit(evt) {
  let userName = document.querySelector('.profile__name');
  let userJob = document.querySelector('.profile__job');

  evt.preventDefault(evt);
  let userNameNew = document.querySelector('#name').value;
  let userJobNew = document.querySelector('#job').value;
  // console.log(userNameNew);
  // console.log(userJobNew);
  // debugger
  userName.textContent = userNameNew;
  userJob.textContent = userJobNew;
}

let form = document.querySelector('.popup-form');
form.addEventListener('submit', handleFormSubmit);

let edit = document.querySelector('.profile__edit');
edit.addEventListener('click', popupOpenClose);

let close = document.querySelector('.popup__close');
close.addEventListener('click', popupOpenClose);