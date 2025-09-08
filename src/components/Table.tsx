import React from "react";
import { Table, Tag, Button, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export type Data = {
  key: string;
  name: string;
  status: string;
  address: string;
};

type Props = {
  datas: Data[]
  onDelete: (key: string) => void;
  onEdit: (record: Data) => void
};

export default function Tables({ datas, onDelete, onEdit }: Props) {
  const columns = [
    {
      title: "Tên kho",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) =>
        status === "Hoạt động" ? (
          <Tag color="green">Hoạt động</Tag>
        ) : (
          <Tag color="red">Ngừng hoạt động</Tag>
        ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_: unknown, record: Data) => (
        <Space>
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => onDelete(record.key)}
          >
            Xóa
          </Button>
          <Button onClick={() => onEdit(record)}>Sửa</Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={datas}
      pagination={false}
      style={{ margin: "20px" }}
      rowKey="key"
    />
  );
}
