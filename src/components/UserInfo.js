export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._nameSelector = nameSelector;
    this._descriptionSelector = descriptionSelector;
  }

  getUserInfo () {
    this._name = document.querySelector(this._nameSelector).textContent;
    this._description = document.querySelector(this._descriptionSelector).textContent;
    this._userInfo = {};
    this._userInfo.name = this._name;
    this._userInfo.description = this._description;

    return this._userInfo;
  }

  setUserInfo (name, description) {
    document.querySelector(this._nameSelector).textContent = name;
    document.querySelector(this._descriptionSelector).textContent = description;
  }
}
