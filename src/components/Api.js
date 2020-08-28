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

  setUserinfo (userName, userDescription) {
    return fetch(`${this._adress}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${userName}`,
        about: `${userDescription}`
      })
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

  addNewCard (cardName, cardLink) {
    return fetch(`${this._adress}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${cardName}`,
        link: `${cardLink}`
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  deleteCard (cardId) {
    return fetch(`${this._adress}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  addLike (cardId) {
    return fetch(`${this._adress}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => {
      return res.likes.length
    });
  }

  deleteLike (cardId) {
    return fetch(`${this._adress}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => {
      return res.likes.length
    });
  }

  changeAvatar (url) {
    return fetch(`${this._adress}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: `${url}`
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => {
      return res.avatar;
    });
  }

  loadAllData() {
    return Promise.all([this.getUserinfo(), this.initialCards()]);
  }

}
