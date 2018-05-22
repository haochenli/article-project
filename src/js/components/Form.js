import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import uuidv1 from "uuid";
import { addArticle, inputOnchange } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article)),
    inputOnchange: content => dispatch(inputOnchange(content))
  };
};

const mapStateToProps = (state, action) => {
  return {
    articles: state.articles,
    content: state.content
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.inputOnchange(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    const title = this.props.content
    const id = uuidv1();
    this.props.addArticle({ title, id });
  }

  render() {
    console.log('test')
    const title = this.props.content;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input ref='input'
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

ConnectedForm.propTypes = {
  addArticle: PropTypes.func.isRequired
};

export default Form;
