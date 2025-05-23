import { Badge, Button, Flex, Popconfirm, Table } from "antd";
import { Edit, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import { Link } from "react-router-dom";
import { useDelete } from "../hooks/useDelete";

export default function DataTable({
  columns,
  url,
  delUrl,
  edit,
  setSum,
  noActions,
}) {
  const { del } = useDelete();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      if (res.status === 200) {
        const mappedData = res.data.map((item, index) => ({
          index: index + 1,
          key: item.id || index,
          ...item,
        }));
        setData(mappedData.sort((a, b) => b.index - a.index));
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  const onDel = async (id) => {
    const res = await del(`${delUrl}/${id}`);

    if (res) {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const renderActions = ({ _id }) => (
    <Flex justify="center" gap={3}>
      <Link to={`${edit}/edit/${_id}`}>
        <Button type="primary" icon={<Edit size={15} />} />
      </Link>
      <Popconfirm
        title="Are you sure?"
        description="Are you sure to delete this?"
        okText="Yes"
        cancelText="No"
        onConfirm={() => onDel(_id)}
      >
        <Button type="primary" danger icon={<Trash2 size={15} />} />
      </Popconfirm>
    </Flex>
  );

  useEffect(() => {
    if (setSum) {
      setSum(data.reduce((e, i) => e + i.price, 0));
    }
  }, [setSum, data]);

  const baseColumns = [
    {
      key: "id",
      title: "#",
      dataIndex: "index",
      width: 10,
    },
    ...columns,
  ];

  if (!noActions) {
    baseColumns.push({
      key: "action",
      title: "Actions",
      width: 10,
      fixed: "right",
      render: renderActions,
    });
  }

  return (
    <Table
      dataSource={data}
      columns={baseColumns}
      scroll={{
        x: "max-content",
      }}
      bordered
      size="small"
      loading={loading}
      pagination={data.length > 10 ? true : false}
    />
  );
}
