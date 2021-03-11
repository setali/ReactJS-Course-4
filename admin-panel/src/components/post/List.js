import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import Table from "../utils/Table";
import { getPosts } from "../../redux/actions/post";

const columns = [
  {
    title: "Id",
    key: "id",
  },
  {
    title: "Title",
    key: "title",
  },
  {
    title: "Action",
    key: "action",
    render: (f, r) => (
      <Link to={`/post/${r.id}`}>
        <EyeOutlined />
      </Link>
    ),
  },
];

class List extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return (
      <div>
        <Table columns={columns} data={this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => dispatch(getPosts()),
    // setItems: (data) => dispatch(setPosts(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
