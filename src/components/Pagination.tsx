
import React from "react";
import { Pagination } from "antd";

export default function PaginationComponent() {
  return (
    <div
      style={{
        margin: "200px auto",
        width: "500px",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Pagination defaultCurrent={1} total={50} pageSize={5} />
    </div>
  );
}
