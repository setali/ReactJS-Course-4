import { Form, Input, Button, message } from "antd";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Text, Select, Submit } from "../utils/Field";

const { Option } = Select;

const genderOptions = [
  { value: true, label: "مرد" },
  { value: false, label: "زن" },
];

const New = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    axios
      .post("https://jsonplaceholder.typicode.com/users", values)
      .then(function (response) {
        message.success("کاربر با موفقیت ایجاد شد.");
        history.push("/person");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Form name="basic" onFinish={onFinish}>
      <Text name="username" label="نام کاربری" required={true} />
      <Text name="name" label="نام" required={true} />
      <Select name="gender" label="جنسیت" required options={genderOptions} />
      <Submit label="ذخیره" loading={loading} disabled={loading} />
    </Form>
  );
};

export default New;
