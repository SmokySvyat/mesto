(()=>{"use strict";var t={formSelector:".popup-form",inputSelector:".popup-form__input",submitButtonSelector:".popup-form__btn",inactiveButtonClass:"popup-form__btn_inactive",inputErrorClass:"popup-form__input_invalid",errorClass:"popup__error_active",errorText:".popup__error",errorClosestParent:".popup-form__input-section"};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.url,this._authorization=e.authorization}var e,n;return e=t,(n=[{key:"_isResultOk",value:function(t){return t.ok?t.json():Promise.reject()}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"users/me"),{headers:{authorization:this._authorization}}).then((function(t){return t.json()}))}},{key:"patchProfile",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:{authorization:this._authorization,"content-type":"application/json"},body:JSON.stringify(t)}).then((function(t){return e._isResultOk(t)}))}},{key:"setUserAvatar",value:function(t){var e=this,r=t.link;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"content-type":"application/json"},body:JSON.stringify({avatar:r})}).then((function(t){return e._isResultOk(t)}))}},{key:"getCard",value:function(){var t=this;return fetch("".concat(this._baseUrl,"cards"),{headers:{authorization:this._authorization,"content-type":"application/json"}}).then((function(e){return t._isResultOk(e)}))}},{key:"postCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:{authorization:this._authorization,"content-type":"application/json"},body:JSON.stringify(t)}).then((function(t){return e._isResultOk(t)}))}},{key:"deleteCard",value:function(t){var e=this,r=t.cardId;return console.log(cardID),fetch("".concat(this._baseUrl,"cards/").concat(r),{method:"DELETE",headers:{authorization:this._authorization}}).then((function(t){return e._isResultOk(t)}))}},{key:"like",value:function(t,e){var r=this;return fetch("".concat(this._baseUrl,"cards/").concat(t,"/likes"),{method:e?"DELETE":"PUT",headers:{authorization:this._authorization}}).then((function(t){return r._isResultOk(t)}))}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,a(n.key),n)}}function u(t,e,r){return(e=a(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===o(e)?e:String(e)}var c=function(){function t(e,r,n){var o=this,i=n.userId,a=n.handleCardClick,c=n.confirmDelete,l=n.handleLikeCard;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"_handleDeleteCard",(function(){o._listItem.remove()})),u(this,"like",(function(t){var e=t.likes;o._likeBtn.classList.toggle("card__like_active"),o._counter.textContent=e.length})),this._name=e.name,this._link=e.link,this._ownerId=e.owner._id,this.cardId=e._id,this.likes=e.likes,this.likesCounter=e.likes.length,this._userId=i,this._templateSelector=r,this._handleCardClick=a,this._confirmDelete=c,this._handleLikeCard=l}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector("#".concat(this._templateSelector)).content.querySelector(".card").cloneNode(!0)}},{key:"isLiked",value:function(t){var e=this;return t.some((function(t){return t._id===e._userId}))}},{key:"deleteCard",value:function(){this._listItem.remove(),this._listItem=null}},{key:"_setEventListeners",value:function(){this._deleteBtn.addEventListener("click",this._confirmDelete),this._likeBtn.addEventListener("click",this._handleLikeCard),this._img.addEventListener("click",this._handleCardClick)}},{key:"generateCard",value:function(){return this._listItem=this._getTemplate(),this._deleteBtn=this._listItem.querySelector(".card__del"),this._likeBtn=this._listItem.querySelector(".card__like"),this._img=this._listItem.querySelector(".card__img"),this._counter=this._listItem.querySelector(".card__like-counter"),this._listItem.querySelector(".card__text").textContent=this._name,this._img.src=this._link,this._img.alt=this._name,this._counter.textContent=this.likesCounter,this._ownerId!==this._userId&&this._deleteBtn.remove(),this.isLiked(this.likes)&&this._likeBtn.classList.add("card__like_active"),this._setEventListeners(),this._listItem}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function f(t,e,r){return(e=p(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var y=function(){function t(e,r,n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"_toggleInputState",(function(t){var e=t.validity.valid;o._setInputState(t,e)})),f(this,"_toggleBtnState",(function(){o._inputs.every((function(t){return t.validity.valid}))?o._setButtonActive():o.setButtonInactive()})),f(this,"_setEventListeners",(function(){o._inputs.forEach((function(t){t.addEventListener("input",(function(){o._toggleInputState(t),o._toggleBtnState()}))})),o._toggleBtnState(o._inputs)})),this._form=r,this._options=e,this._submitElement=n,this._inputs=Array.from(this._form.querySelectorAll(this._options.inputSelector))}var e,r;return e=t,(r=[{key:"_showError",value:function(t,e){t.textContent=e.validationMessage,t.classList.add(this._options.errorClass),e.classList.add(this._options.inputErrorClass)}},{key:"_hideError",value:function(t,e){t.textContent="",t.classList.remove(this._options.errorClass),e.classList.remove(this._options.inputErrorClass)}},{key:"_setButtonActive",value:function(){this._submitElement.removeAttribute("disabled"),this._submitElement.classList.remove(this._options.inactiveButtonClass)}},{key:"setButtonInactive",value:function(){this._submitElement.setAttribute("disabled","true"),this._submitElement.classList.add(this._options.inactiveButtonClass)}},{key:"_setInputState",value:function(t,e){var r=t.closest(this._options.errorClosestParent).querySelector(this._options.errorText);e?this._hideError(r,t):this._showError(r,t)}},{key:"enableValidation",value:function(){var t=this._form;this._setEventListeners(t)}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();const h=y;function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}var d=function(){function t(e){var r=e.profileNameSelector,n=e.profileAboutSelector,o=e.profileAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(r),this._profileAbout=document.querySelector(n),this._profileAvatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileAbout.textContent,avatar:this._profileAvatar.src}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about,n=t.avatar;this._profileName.textContent=e,this._profileAbout.textContent=r,this._profileAvatar.src=n}}])&&v(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}var g=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e.renderer,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"render",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"addItemReverse",value:function(t){this._container.append(t)}}])&&_(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,O(n.key),n)}}function w(t,e,r){return(e=O(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t){var e=function(t,e){if("object"!==S(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===S(e)?e:String(e)}var j=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,"_handleEscClose",(function(t){"Escape"===t.key&&r.close()})),w(this,"_handleOverlayClose",(function(t){t.target===t.currentTarget&&r.close()})),w(this,"close",(function(){r._popup.classList.remove("popup_active"),document.addEventListener("keydown",r._handleEscClose)})),this._popup=document.querySelector(e),this._closeBtn=this._popup.querySelector(".popup__close"),this._buttonSubmit=this._popup.querySelector(".popup-form__btn")}var e,r;return e=t,(r=[{key:"renderLoading",value:function(t,e){this._buttonSubmit&&(t?(this.defaultText=this._buttonSubmit.value,this._buttonSubmit.value=e):this._buttonSubmit.value=this.defaultText)}},{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._closeBtn.addEventListener("click",this.close),this._popup.addEventListener("click",this._handleOverlayClose)}}])&&k(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},C.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(n);if(o){var r=I(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r,n=e.submitCallback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._submitCallback=n,r}return e=u,(r=[{key:"close",value:function(){C(I(u.prototype),"close",this).call(this)}},{key:"open",value:function(t){C(I(u.prototype),"open",this).call(this),console.log(t),console.log(t.cardId),this.cardId=t.cardID,this.card=t}},{key:"setEventListeners",value:function(){var t=this;C(I(u.prototype),"setEventListeners",this).call(this),this._buttonSubmit.addEventListener("click",(function(){t._submitCallback(t)}))}}])&&P(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(j);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===R(o)?o:String(o)),n)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},A.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(n);if(o){var r=x(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__image"),e._title=e._popup.querySelector(".popup__heading"),e}return e=u,(r=[{key:"open",value:function(t){var e=t.link,r=t.name;this._image.src=e,this._image.alt=r,this._title.textContent=r,A(x(u.prototype),"open",this).call(this)}}])&&q(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(j);function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function D(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==z(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===z(o)?o:String(o)),n)}var o}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=J(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},N.apply(this,arguments)}function V(t,e){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},V(t,e)}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&V(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=J(n);if(o){var r=J(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===z(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r,n=e.submitCallback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._submitCallback=n,r._form=r._popup.querySelector(".popup-form"),r._inputsList=Array.from(r._form.querySelectorAll(".popup-form__input")),r._inputsValues={},r}return e=u,(r=[{key:"_getInputValue",value:function(){var t=this;return this._inputsList.forEach((function(e){t._inputsValues[e.name]=e.value})),this._inputsValues}},{key:"setEventListeners",value:function(){var t=this;N(J(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(t._getInputValue())}))}},{key:"close",value:function(){N(J(u.prototype),"close",this).call(this),this._form.reset()}},{key:"fillInputs",value:function(t){this._inputsList.forEach((function(e){var r;e.value=null!==(r=t[e.name])&&void 0!==r?r:""}))}}])&&D(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(j);function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var $,F=document.querySelector(".profile__edit"),G=document.querySelector(".profile__add"),K=document.querySelector(".profile__avatar-overlay"),Q=document.querySelector("#popup-edit"),W=Q.querySelector(".popup-form"),X=Q.querySelector(".popup-form__btn"),Y=document.querySelector("#popup-add"),Z=Y.querySelector(".popup-form"),tt=Y.querySelector(".popup-form__btn"),et=new n({url:"https://mesto.nomoreparties.co/v1/cohort-64/",authorization:"476fa7c1-24a0-4703-9208-cf8aef471951"}),rt=new d({profileNameSelector:".profile__name",profileAboutSelector:".profile__job",profileAvatarSelector:".profile__avatar"}),nt=new g({renderer:function(t){nt.addItem(lt(t))}},".cards"),ot=new H("#popup-edit",{submitCallback:function(t){ot.renderLoading(!0,"Сохранение..."),et.patchProfile(t).then((function(t){rt.setUserInfo(t),ot.close()})).catch((function(t){return console.log(t)})).finally(ot.renderLoading(!1))}}),it=new H("#popup-add",{submitCallback:function(t){it.renderLoading(!0,"Сохранение..."),et.postCard({name:t.place,link:t.link,likes:[0]}).then((function(t){nt.addItem(lt(t)),st.setButtonInactive(tt),it.close()})).catch((function(t){return console.log(t)})).finally((function(){it.renderLoading(!1)}))}}),ut=new U(".popup-image"),at=new H("#popup-change-avatar",{submitCallback:function(t){at.renderLoading(!0,"Сохранение..."),et.setUserAvatar(t).then((function(t){rt.setUserInfo(t),at.close()})).catch((function(t){return console.log(t)})).finally((function(){at.renderLoading(!1)}))}}),ct=new T("#popup-confirm-delete",{submitCallback:function(t){var e=t.card;console.log(e),console.log(e.cardId),ct.renderLoading(!0,"Удаление..."),et.deleteCard(e).then((function(){e.deleteCard(),ct.close()})).catch((function(t){return console.log(t)})).finally(ct.renderLoading(!1))}}),lt=function(t){var e=new c(t,"card-template",{userId:$,handleCardClick:function(){ut.open(t)},confirmDelete:function(){ct.open(e)},handleLikeCard:function(){et.like(e.cardId,e.isLiked(e.likes)).then((function(t){e.like(t)})).catch((function(t){return console.log(t)}))}});return e.generateCard()};Promise.all([et.getCard(),et.getProfile()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return M(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];$=i._id,o.forEach((function(t){return nt.addItemReverse(lt(t))})),rt.setUserInfo(i)})),G.addEventListener("click",(function(){it.open()})),F.addEventListener("click",(function(){ot.fillInputs(rt.getUserInfo()),ot.open()})),K.addEventListener("click",(function(){at.open()})),it.setEventListeners(),ot.setEventListeners(),ut.setEventListeners(),at.setEventListeners(),ct.setEventListeners();var st=new h(t,Z,tt);st.enableValidation(),new h(t,W,X).enableValidation()})();