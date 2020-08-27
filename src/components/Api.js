export default class Api {
  constructor(adress, token) {
    this._adress = adress;
    this._token = token;
  }

  getUserinfo () {
    return fetch(`${this._adress}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  initialCards () {
    return fetch(`${this._adress}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}
