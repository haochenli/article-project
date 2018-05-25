import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import uuidv1 from "uuid";
import { addArticle, inputOnchange } from "../actions/index";

const mapDispatchToProps = dispatch => bindActionCreators({
    addArticle,
    inputOnchange
}, dispatch);

const mapStateToProps = ({ articles, content, mode }) => ({
  articles,
  content,
  mode
})

class ConnectedForm extends Component {
  // constructor(props) {
  //   super(props)
  //   // this.edit = false
  // }

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
    const { content, mode } = this.props;
    // if(mode === 'EDIT_ARTICLE') {
    //   this.isEdit = true
    // } else if (mode === 'ADD_ARTICLE') {
    //   this.isEdit = false
    // }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input ref='input'
            type="text"
            className="form-control"
            id="title"
            value={content}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          {mode.types === 'EDIT_ARTICLE' ? 'UPLOAD' : 'SAVE'}
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
