export default class Api {
    constructor({url, authorization}) {
      this._baseUrl = url;
      this._authorization = authorization;
    }
  
    _isResultOk(res) {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    };
  
    getProfile() {
      return fetch(`${this._baseUrl}users/me`, {
          headers: {
            authorization: this._authorization
          }
        })
          .then(res => res.json())
          .catch(err => console.log(err))
    };
  
    patchProfile(values) {
      return fetch(`${this._baseUrl}users/me`, {
        method: 'PATCH',
        headers: {
          authorization: this._authorization,
          'content-type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      .then(res => this._isResultOk(res))
      .catch(err => console.log(err))
    };

    setUserAvatar({link}) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: this._authorization,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          avatar: link
        })
      })
      .then(res => this._isResultOk(res))
      .catch(err => console.log(err))
    };
  
    getCard() {
      return fetch(`${this._baseUrl}cards`, {
        headers: {
          authorization: this._authorization,
          'content-type': 'application/json'
        }
      }). then(res => this._isResultOk(res))
      .catch(err => console.log(err))
    };
  
    postCard(data) {
      return fetch(`${this._baseUrl}cards`, {
        method: 'POST',
        headers: {
          authorization: this._authorization,
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => this._isResultOk(res))
      .catch(err => console.log(err))
    };

    deleteCard(cardId) {
      return fetch(`${this._baseUrl}cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._authorization,
        }
      })
      .then(res => this._isResultOk(res))
      .catch(err => console.log(err))
    }

    like(cardId, isLiked) {
        return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
          method: isLiked ? 'DELETE' : 'PUT',
          headers: {
            authorization: this._authorization
          }
        })
        .then((res) => this._isResultOk(res))
        .catch(err => console.log(err))
      }
  };