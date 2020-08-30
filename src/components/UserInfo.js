export default class UserInfo {
  constructor({ nameSelector, descriptionSelector, avatarSelector }) {
    this._nameSelector = nameSelector;
    this._descriptionSelector = descriptionSelector;
    this._avatarSelector = avatarSelector;
    this._userName = document.querySelector(this._nameSelector);
    this._userDescription = document.querySelector(this._descriptionSelector);
    this._userAvatar = document.querySelector(this._avatarSelector);
  }

  getUserInfo() {
    this._userInfo = {};
    this._userInfo.name = this._userName.textContent;
    this._userInfo.description = this._userDescription.textContent;
    this._userInfo.avatar = this._userAvatar.src;

    return this._userInfo;
  }

  setUserInfo({ name, description, avatar }) {
    if (name) {
      this._userName.textContent = name;
    }
    if (description) {
      this._userDescription.textContent = description;
    }
    if (avatar) {
      this._userAvatar.src = avatar;
    }
  }
}
