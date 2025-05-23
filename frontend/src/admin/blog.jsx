import { Button, Card } from "antd";
import DataTable from "../components/data-table";
import dayjs from "dayjs";
import { PlusCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <Card title="Blog">
      <Link to="/blog/add">
        <Button type="primary" icon={<PlusCircleIcon size={20} />}>
          Add
        </Button>
      </Link>
      <br />
      <br />
      <DataTable
        columns={[
          {
            key: "title",
            dataIndex: "title",
            title: "Title",
            width: 500,
          },
          {
            key: "description",
            dataIndex: "description",
            title: "Description",
            width: 500,
          },
          {
            key: "category",
            dataIndex: "category",
            title: "Category",
          },
          {
            key: "date",
            dataIndex: "date",
            title: "Date",
            render: (date) => dayjs(date).format("DD/MM/YYYY"),
          },
        ]}
        url={"/blog"}
        delUrl={"/blog"}
        edit={"/blog"}
      />
    </Card>
  );
}
