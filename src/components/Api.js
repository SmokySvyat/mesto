export default class Api {
    constructor(config) {
      this._baseUrl = config.url;
      this._authorization = config.authorization;
    }
  
    _isResultOk(res) {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject()
    };
  
    getProfile() {
      return fetch(`${this._baseUrl}users/me`, {
          headers: {
            authorization: this._authorization
          }
        })
          .then(res => res.json())
          // .then(res => console.log(res))
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
    }
  
    getCard() {
      return fetch(`${this._baseUrl}cards`, {
        headers: {
          authorization: this._authorization,
          'content-type': 'application/json'
        }
      }). then(res => this._isResultOk(res))
    //   .then(res => console.log(res))
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
    };

    deleteCard({cardId}) {
      console.log(cardID)
      return fetch(`${this._baseUrl}cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._authorization,
        }
      })
      .then(res => this._isResultOk(res))
    }

    like(cardId, isLiked) {
        return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
          method: isLiked ? 'DELETE' : 'PUT',
          headers: {
            authorization: this._authorization
          }
        })
        .then((res) => this._isResultOk(res));
      }
  };