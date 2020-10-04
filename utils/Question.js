import Choice from "./Choice";

export default class Question {
  constructor(url, question, publishedAt, choices) {
    this._question = question;
    this._publishedAt = this.convertDate(publishedAt);
    this._choices = choices.map(
      (choice, index) =>
        new Choice(choice.url, index, choice.choice, choice.votes)
    );
    this._id = Question.countInstances;
    this._url = url;
    Question.countInstances++;
  }

  convertDate(date) {
    return new Date(date).toDateString();
  }

  static createModelInstances(data) {
    return data.map(
      (item) =>
        new Question(item.url, item.question, item.published_at, item.choices)
    );
  }

  // getters - setters
  get url() {
    return this._url;
  }
  get id() {
    return this._id;
  }
  get question() {
    return this._question;
  }
  get publishedAt() {
    return this._publishedAt;
  }
  get choices() {
    return this._choices;
  }
  set choices(choices) {
    return (this._choices = choices);
  }
}
Question.countInstances = 0;
