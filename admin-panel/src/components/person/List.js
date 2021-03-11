import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import Table from "../utils/Table";
import { setPersons } from "../../redux/actions/person";

class List extends React.Component {
  state = {
    loading: true,
  };

  columns = [
    {
      title: "Id",
      key: "id",
    },
    {
      title: "Name",
      key: "name",
    },
    {
      title: "Usernane",
      key: "username",
    },
    {
      title: "Address",
      key: "address",
      render: (field, record) => `${field.city} ${field.street} ${field.suite}`,
    },
    {
      title: "Action",
      key: "action",
      render: (f, r) => (
        <>
          <span onClick={() => this.remove(r.id)}>
            <DeleteOutlined />
          </span>
          <span style={{ margin: "0 10px" }}>
            <Link to={`/person/${r.id}`}>
              <EyeOutlined />
            </Link>
          </span>
        </>
      ),
    },
  ];

  remove(id) {
    console.log(id);
    // axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`, { id })
    //     .then(response => console.log(response))
  }

  componentDidMount() {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.props.setItems(response.data);
        // this.setState({ users: response.data });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        <Table
          columns={this.columns}
          data={this.props.persons}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setItems: function (data) {
      dispatch(setPersons(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
