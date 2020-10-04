export default class Choice {
  constructor(url, id, choice, votes) {
    this._id = id;
    this._choice = choice;
    this._votes = votes;
    this._url = url;
  }

  get url() {
    return this._url;
  }
  get id() {
    return this._id;
  }
  get choice() {
    return this._choice;
  }
  get votes() {
    return this._votes;
  }
  set votes(votes) {
    this._votes = votes;
  }
}
