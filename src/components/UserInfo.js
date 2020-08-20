export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._nameSelector = nameSelector;
    this._descriptionSelector = descriptionSelector;
    this._userName = document.querySelector(this._nameSelector);
    this._userDescription = document.querySelector(this._descriptionSelector);
  }

  getUserInfo () {
    this._userInfo = {};
    this._userInfo.name = this._userName.textContent;
    this._userInfo.description = this._userDescription.textContent;

    return this._userInfo;
  }

  setUserInfo (name, description) {
    this._userName.textContent = name;
    this._userDescription.textContent = description;
  }
}
