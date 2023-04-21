export default class UserInfo {
    constructor({profileNameSelector, profileAboutSelector, profileAvatarSelector}) {
      this._profileName = document.querySelector(profileNameSelector);
      this._profileAbout = document.querySelector(profileAboutSelector);
      this._profileAvatar = document.querySelector(profileAvatarSelector);
    }
  
    getUserInfo() {
      this._userInfo = {};

      this._userInfo['name'] = this._profileName.textContent;
      this._userInfo['about'] = this._profileAbout.textContent;
      this._userInfo['avatar'] = this._profileAvatar;
      this._userInfo['id'] = this._id;
      console.log(this._userInfo)

      return this._userInfo;
    };
  
    setUserInfo({name, about, avatar, _id}) {
      this._profileName.textContent = name;
      this._profileAbout.textContent = about;
      this._id = _id;
      this._profileAvatar.src = avatar;
    };
}