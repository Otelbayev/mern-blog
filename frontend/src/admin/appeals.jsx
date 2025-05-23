import { Button, Card } from "antd";
import DataTable from "../components/data-table";
import { Link } from "react-router-dom";
import { File } from "lucide-react";

export default function Appeals() {
  return (
    <Card title="Ariza va murojaatlar">
      <DataTable
        columns={[
          {
            key: "name",
            dataIndex: "name",
            title: "Full name",
          },
          {
            key: "email",
            dataIndex: "email",
            title: "Email",
          },
          {
            key: "message",
            dataIndex: "message",
            title: "Message",
          },
          {
            key: "file",
            dataIndex: "file",
            title: "File",
            align: "center",
            render: (file) => (
              <Link
                to={`${import.meta.env.VITE_IMG_URL}${file}`}
                target="_blank"
              >
                <Button>
                  <File size={18} />
                </Button>
              </Link>
            ),
          },
        ]}
        delUrl={""}
        url="/appeal"
        noActions
      />
    </Card>
  );
}
