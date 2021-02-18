import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Divider } from "antd";

const Full = () => {
  const [person, setPerson] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) =>
      setPerson(response.data)
    );
  }, [id]);

  return (
    <div>
      <label>نام: </label>
      <span>{person.name}</span>
      <Divider />

      <label>ایمیل: </label>
      <span>{person.email}</span>

      <Divider />
      <Link to="/person">بازگشت به لیست</Link>
    </div>
  );
};

export default Full;
