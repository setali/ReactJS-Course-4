import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Divider } from "antd";
import { getPost } from "../../redux/actions/post";

const Full = () => {
  const { id } = useParams();

  // const [post, setPost] = useState({});
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  return (
    <div>
      <label>نام: </label>
      <span>{post.title}</span>

      <Divider />
      <Link to="/post">بازگشت به لیست</Link>
    </div>
  );
};

export default Full;
