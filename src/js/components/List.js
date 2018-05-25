import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteArticle, editArticle } from "../actions/index";

const mapStateToProps = ({articles}) => ({
  articles
});

const mapDispatchToProps = dispatch => {
  return {
    deleteArticle: articleId => dispatch(deleteArticle(articleId)),
    editArticle: article => dispatch(editArticle(article))
  }
}

class ConnectedList extends Component {
 
  handleDelete = (article, deleteArticle) => {
    return function () {
      event.preventDefault();
      const {id} = article;
      deleteArticle(id);
    }
  }

  handleEdit = (article, editArticle) => {
    return function () {
      editArticle(article)
    }
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
      {
        this.props.articles.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.title}
          <button onClick={this.handleDelete(el, this.props.deleteArticle)} >DELETE</button>
          <button onClick={this.handleEdit(el, this.props.editArticle)}>Edit</button>
        </li>
      ))}
    </ul>
    )
  }
}
// const ConnectedList = ({ articles }) => (

//   <ul className="list-group list-group-flush">
//     {articles.map(el => (
//       <li className="list-group-item" key={el.id}>
//         {el.title}
//         <button onClick={}>DELETE</button>
//       </li>
//     ))}
//   </ul>
// );

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

ConnectedList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default List;
