import React from "react";
import {  Form, Input } from "antd";
export const FieldHelpers = ({
  label,
  name,
  required = true,
  message,
  inp = true,
  children=''
}) => {
  return (
    <Form.Item 
      label={label}
      name={name}
      rules={[
        {
          required: required,
          message: message,
        },
      ]}
      style={{marginTop:"16px"}}
   >
      {children ? null : 
      inp ? <Input /> : <Input.Password />}
    </Form.Item>
  );
};
