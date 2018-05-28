import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import uuidv1 from "uuid";
import { addArticle, inputOnchange, updateArticle } from "../actions/index";

const mapDispatchToProps = dispatch => bindActionCreators({
    addArticle,
    inputOnchange,
    updateArticle
}, dispatch);
//   return {
//   addArticle: article => dispatch(addArticle(article)),
//   inputOnchange: content => dispatch(inputOnchange(content))
// };
// };
const mapStateToProps = ({ articles, content, mode, selectedArticle }) => ({
  articles,
  content,
  mode,
  selectedArticle
})

class ConnectedForm extends Component {
  handleChange = event => {
    this.props.inputOnchange(event.target.value)
  }

  addArticle = event => {
    event.preventDefault();
    const title = this.props.content
    const id = uuidv1();
    this.props.addArticle({ title, id });
  }

  updateArticle = event => {
    event.preventDefault();
    const newArticle = {
      id: this.props.selectedArticle.id,
      title: this.props.content
    }
    this.props.updateArticle(newArticle)
  }

  render() {
    const { content, mode } = this.props;
    return (
      <form onSubmit={mode === 'EDIT_ARTICLE' ? this.updateArticle : this.addArticle}>
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
          {mode === 'EDIT_ARTICLE' ? 'UPLOAD' : 'SAVE'}
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
