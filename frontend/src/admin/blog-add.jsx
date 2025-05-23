import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
import { UploadCloud } from "lucide-react";
import Quill from "../components/quill";
import { useState } from "react";
import { useCreate } from "../hooks/useCreate";
import { useNavigate } from "react-router-dom";

export default function BlogAdd() {
  const [value, setValue] = useState("");
  const { create } = useCreate();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.desctiption);
    formData.append("category", values.category);
    formData.append("date", values.date);
    formData.append("image", values.image.fileList[0]?.originFileObj || "");
    formData.append("data_text", value);

    const res = await create("/blog", formData);

    if (res) {
      navigate("/blog");
    }
  };

  return (
    <Card title="Add Blog">
      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={[10, 10]}>
          <Col xs={24} md={8}>
            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
              <Input placeholder="Title" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item
              name="desctiption"
              label="Desctiption"
              rules={[{ required: true }]}
            >
              <Input placeholder="Desctiption" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Category"
                options={[
                  {
                    label: "Yangilik",
                    value: "Yangilik",
                  },
                  {
                    label: "E'lon",
                    value: "E'lon",
                  },
                  {
                    label: "Maqola",
                    value: "Maqola",
                  },
                  {
                    label: "Blog",
                    value: "Blog",
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item name="data_text" label="Text">
              <Quill value={value} onChange={setValue} />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item name="date" label="Date" rules={[{ required: true }]}>
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item name="image" label="Image" rules={[{ required: true }]}>
              <Upload
                beforeUpload={() => false}
                maxCount={1}
                style={{ width: "100%" }}
              >
                <Button>
                  <UploadCloud size={18} /> Upload Image
                </Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
