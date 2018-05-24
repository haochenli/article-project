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

const mapStateToProps = state => {
  return {
    articles: state.articles,
    content: state.content,
    action: state.action
  };
};

class ConnectedForm extends Component {
  constructor(props) {
    super(props)
    this.edit = false
  }

  handleChange = event => {
    this.props.inputOnchange(event.target.value)
  }

  handleSubmit = event => {
    event.preventDefault();
    const title = this.props.content
    const id = uuidv1();
    this.props.addArticle({ title, id });
  }

  render() {
    const title = this.props.content;
    if(this.props.action.type === 'EDIT_ARTICLE') {
      this.isEdit = true
    } else if (this.props.action.type === 'ADD_ARTICLE') {
      this.isEdit = false
    }
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
          {this.isEdit ? 'UPLOAD' : 'SAVE'}
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
