var commentData = [];


var CommentBox = React.createClass({ displayName: "CommentBox",
  getInitialState: function getInitialState() {
    return {
      data: commentData };

  },
  handleCommentSubmit: function handleCommentSubmit(comment) {
    this.props.data.push(comment);
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({ data: newComments });
  },
  render: function render() {
    return (
      React.createElement("div", { className: "comment-box" },
        React.createElement(CommentForm, { data: this.props.data, onCommentSubmit: this.handleCommentSubmit }),
        React.createElement(CommentList, { data: this.props.data })));


  } });

var CommentList = React.createClass({ displayName: "CommentList",
  render: function render() {
    return (
      React.createElement("div", { className: "comment-list" },
        this.props.data.map(function (c) {
          return (
            React.createElement(Comment, { author: c.author, text: c.text }));

        })));


  } });

var CommentForm = React.createClass({ displayName: "CommentForm",
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var authorVal = e.target[0].value.trim();
    var textVal = e.target[1].value.trim();
    if (!textVal || !authorVal) {
      return;
    }
    this.props.onCommentSubmit({ author: authorVal, text: textVal });
    e.target[0].value = '';
    e.target[1].value = '';
    return;
  },
  render: function render() {
    return (
      React.createElement("form", { className: "comment-form form-group", onSubmit: this.handleSubmit },
        React.createElement("div", { className: "input-group" },
          React.createElement("span", { className: "input-group-addon" }, "Title"),
          React.createElement("input", { type: "text", placeholder: "Something enduring", className: "form-control" })),

        React.createElement("div", { className: "input-group" },
          React.createElement("span", { className: "input-group-addon" }, "Content"),
          React.createElement("input", { type: "text", placeholder: "Something insightful", className: "form-control" })),

        React.createElement("input", { type: "submit", value: "Post", className: "btn btn-primary" })));


  } });

var Comment = React.createClass({ displayName: "Comment",
  render: function render() {
    return (
      React.createElement("div", { className: "comment" },
        React.createElement("h2", { className: "author" }, this.props.author),
        this.props.text));


  } });

React.render(
React.createElement(CommentBox, { data: commentData }),
document.getElementById('app'));