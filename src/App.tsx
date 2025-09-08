import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Tables from "./components/Table";
import { Modal, Form, Input, Select, Pagination } from "antd";

export type Data = {
  key: string;
  name: string;
  address: string;
  status: string;
};

export default function App() {
  const [datas, setDatas] = useState<Data[]>([]);
  const [deleteKho, setDeleteKho] = useState<string | null>(null);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const [isEditModal, setIsEditModal] = useState(false);
  const [editKho, setEditKho] = useState<Data | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const saver = localStorage.getItem("datas");
    if (saver) {
      setDatas(JSON.parse(saver));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("datas", JSON.stringify(datas));
  }, [datas]);

  const onAdd = (values: { name: string; address: string; status: string }) => {
    const newData: Data = {
      key: Math.random().toString(),
      name: values.name,
      address: values.address,
      status: values.status,
    };
    setDatas([...datas, newData]);
  };

  const onDelete = (key: string) => {
    setDeleteKho(key);
    setIsDeleteModal(true);
  };

  const handleDeleteOk = () => {
    if (deleteKho) {
      setDatas(datas.filter((data) => data.key !== deleteKho));
      setDeleteKho(null);
    }
    setIsDeleteModal(false);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModal(false);
  };

  const onEdit = (record: Data) => {
    setEditKho(record);
    setIsEditModal(true);
    form.setFieldsValue(record);
  };

  const handleEditOk = () => {
    form.validateFields().then((values) => {
      if (editKho) {
        setDatas(
          datas.map((item) =>
            item.key === editKho.key ? { ...item, ...values } : item
          )
        );
        setIsEditModal(false);
        setEditKho(null);
      }
    });
  };

  const handleEditCancel = () => {
    setIsEditModal(false);
    setEditKho(null);
  };

  return (
    <div style={{ backgroundColor: "#f2f3f5" }}>
      <Header />
      <Body onAdd={onAdd} />
      <Tables datas={datas} onDelete={onDelete} onEdit={onEdit} />

      <Modal
        title="Xác nhận xóa"
        open={isDeleteModal}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      >
        <p>Bạn có chắc muốn xóa kho này?</p>
      </Modal>
      <Modal
        title="Chỉnh sửa kho"
        open={isEditModal}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Tên kho"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập tên kho!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Trạng thái"
            name="status"
            rules={[{ required: true, message: "Vui lòng chọn trạng thái!" }]}
          >
            <Select
              options={[
                { value: "Hoạt động", label: "Hoạt động" },
                { value: "Ngừng hoạt động", label: "Ngừng hoạt động" },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
      <Pagination></Pagination>
    </div>
  );
}
