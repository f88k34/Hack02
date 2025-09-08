import React from "react";
// import type { FormProps } from "antd";
import { Button, Form, Input, Select } from "antd";
import { FormOutlined } from "@ant-design/icons";
// import { Select, Space } from "antd";
type Props = {
  onAdd: (values: { name: string; address: string; status: string }) => void;
};
export default function Body({ onAdd }: Props) {
  const [form] = Form.useForm();

  const onFinish = (values: {
    name: string;
    address: string;
    status: string;
  }) => {
    onAdd(values);
    form.resetFields();
  };
  return (
    <div
      style={{
        border: "1px solid #ddd",
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px",
      }}
    >
      <h2>
        <FormOutlined /> Thêm kho mới
      </h2>
      <Form form={form} layout="inline" onFinish={onFinish} autoComplete="off">
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Tên kho không được để trống!" }]}
        >
          <Input placeholder="Nhập tên kho" />
        </Form.Item>
        <Form.Item
          name="address"
          rules={[{ required: true, message: "Địa chỉ không được để trống!" }]}
        >
          <Input placeholder="Nhập địa chỉ kho" />
        </Form.Item>

        <Form.Item name="status" initialValue="active">
          <Select
            style={{ width: 200 }}
            options={[
              { value: "active", label: "Hoạt động" },
              { value: "inactive", label: "Ngừng hoạt động" },
            ]}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
