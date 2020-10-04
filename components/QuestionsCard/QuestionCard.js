import React from "react";

export default function QuestionCard(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Question: {props.question.question}</h5>
        <p className="card-text">Published: {props.question.publishedAt}</p>
        <p className="card-text">Choices: {props.question.choices.length}</p>
        <button
          className="btn btn-success"
          onClick={(e) => props.onQuestionClick(e, props.question)}
        >
          Answer Now
        </button>
      </div>
    </div>
  );
}
