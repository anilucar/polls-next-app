import React, { Component, Fragment } from "react";
import axios from "axios";

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRadioButton: {
        url: "",
        name: "",
      },
      disableSubmitButton: true,
    };
  }

  onRadioButtonChoiceChange(e) {
    this.setState({
      selectedRadioButton: {
        name: e.target.name,
        value: e.target.value,
      },
      disableSubmitButton: false,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    axios
      .post(
        `https://polls.apiblueprint.org${this.state.selectedRadioButton.value}`
      )
      .then((response) => {
        console.log(response);
        if (response) {
          const { data } = response;

          this.props.question.choices = this.props.question.choices.map(
            (choice) => {
              if (choice.choice === data.choice) {
                choice.votes = data.votes;
                return choice;
              }
              return choice;
            }
          );
          this.props.resetActiveQuestion();
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { selectedRadioButton, disableSubmitButton } = this.state;
    return (
      <div className="container">
        <h5 className="mb-5 mt-5">Question: {this.props.question.question}</h5>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          {this.props.question.choices.map((choice) => (
            <div className="card" key={choice.id}>
              <div className="form-check p-5">
                <input
                  className="form-check-input"
                  checked={choice.choice === selectedRadioButton.name}
                  type="radio"
                  id={choice.choice}
                  name={choice.choice}
                  value={choice.url}
                  onChange={this.onRadioButtonChoiceChange.bind(this)}
                />
                <p className="form-check-label">{choice.choice}</p>
                <p>
                  <b>
                    Votes:
                    {choice.votes}
                  </b>
                </p>
              </div>
            </div>
          ))}
          <button
            disabled={disableSubmitButton}
            type="submit"
            className="btn btn-info"
          >
            SEND
          </button>
        </form>
      </div>
    );
  }
}
export default QuestionDetail;
