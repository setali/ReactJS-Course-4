import { Form, Input, Select as AntSelect, Button } from "antd";
import React from "react";

export const Text = ({ label, name, required }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required,
          message: `${label} اجباری است.`,
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
};

export const Select = ({ name, label, required, options }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required,
          message: `${label} اجباری است.`,
        },
      ]}
    >
      <AntSelect style={{ width: 120 }}>
        {options.map((item) => (
          <AntSelect.Option value={item.value}>{item.label}</AntSelect.Option>
        ))}
      </AntSelect>
    </Form.Item>
  );
};

export const Submit = ({ label, ...props }) => {
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit" {...props}>
        {label}
      </Button>
    </Form.Item>
  );
};
