class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _handlingResponse(result) {
    if (result.ok) {
      return result.json();
    } else {
      return Promise.reject(result.status);
    }
  }

  getExchangeRates() {
    return fetch(`${this._baseUrl}/latest.json`)
      .then((result) => this._handlingResponse(result))
  }

}

const api = new Api({
  baseUrl: 'https://cdn.cur.su/api',
});

export default api;
