import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table, DatePicker} from "antd";
import { useDispatch, useSelector } from "react-redux";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { DeleteOutlined } from "@ant-design/icons";
import { Content } from "antd/lib/layout/layout";
import axios from "axios";

import { FieldHelpers } from "../../utility/Helpers";
import { getAction } from "../../redux/actions/readAction";
import { deleteAction } from "../../redux/actions/deleteAction";
import {
  DELATE_DEALS,
  GET_DEALS,
} from "../../redux/actions/types";

export const Deals = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.dealsReduser);
  const [createVisible, setCreateVisible] = useState(false);
  const [selectedID, setSelectedID] = useState(null);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(getAction(GET_DEALS));
    if (!data) {
      return <p>loading...</p>;
    }
  }, [dispatch]);

  const showModal = (id) => {
    setVisible(true);
    setSelectedID(id);
  };
  const createHandleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        axios({
          method: "post",
          url: "https://v1.nocodeapi.com/roziya/pipedrive/AmYAHoFwBvImctkd/deals",
          data: values,
        })
          .then((res) => {
           dispatch(getAction(GET_DEALS))
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };
  const handleOk = () => {
    setConfirmLoading(true);
    dispatch(deleteAction(DELATE_DEALS, selectedID));
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      dispatch(getAction(GET_DEALS));
    }, 0);
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Value", dataIndex: "value", key: "value" },
    { title: "currency", dataIndex: "currency", key: "currency" },
    { title: "End Time", dataIndex: "add_time", key: "add_time" },
    { title: "End Time", dataIndex: "add_time", key: "add_time" },
    {
      title: (
        <>
          <Button type="primary" onClick={()=>setCreateVisible(true)}>
            <AddBoxIcon />
          </Button>
          <Modal
            title={"Create"}
            visible={createVisible}
            onOk={createHandleOk}
            onCancel={()=>setCreateVisible(false)}
            okText={"Create"}
            cancelText={"Cancel"}
            htmlType="submit"
          >
            <Form
              form={form}
              layout="vertical"
              name="form_in_modal"
              initialValues={{
                modifier: "public",
              }}
            >
              <FieldHelpers label="Title" name="title" />

              <FieldHelpers label="Value" name="value" />
              <Form.Item
                style={{ marginTop: "16px" }}
                label={" ADD Time"}
                name={"add_time"}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>
              
            </Form>
          </Modal>
        </>
      ),
      dataIndex: "",
      key: "x",
      render: (text) => (
        <>
          <Button type="danger" onClick={(e) => showModal(text.id)}>
            <DeleteOutlined />
          </Button>
          <Modal
            title={"Delete"}
            visible={visible}
            onOk={(handleOk)}
            confirmLoading={confirmLoading}
            onCancel={()=>setVisible(false)}
            okText={"o'chirish"}
            okType={"danger"}
            cancelText={"Cancel"}
          >
            <h2>Are you sure you want to delete this information?</h2>
            <p>If you delete this data, it cannot be recovered</p>
          </Modal>
        </>
      ),
    },
  ];
  // const map=data.map(a=><>
  //   {a.person_id.email.value}
  //   </>)
  //   console.log(map);
  return (
    <>
      <Content style={{ margin: "0 16px" }}>
        <Table
          style={{ margin: "16px 0" }}
          columns={columns}
          dataSource={data.data}
        />
      </Content>
    </>
  );
};
