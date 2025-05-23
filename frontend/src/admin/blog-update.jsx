import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Image,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
import { UploadCloud } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useUpdate } from "../hooks/useUpdate";
import { useGet } from "../hooks/useGet";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";
import "react-quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";

export default function BlogUpdate() {
  const { update } = useUpdate();
  const { get } = useGet();
  const navigate = useNavigate();
  const { id } = useParams();
  const [form] = useForm();
  const [img, setImg] = useState(null);
  const { quill, quillRef } = useQuill();
  const [data, setData] = useState({});

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.desctiption);
    formData.append("category", values.category);
    formData.append("date", values.date);
    formData.append("image", values.image.fileList[0]?.originFileObj || "");
    formData.append("data_text", quill.root.innerHTML);

    const res = await update(`/blog/${id}`, formData);

    if (res) {
      navigate("/blog");
    }
  };

  const getData = async () => {
    const res = await get(`/blog/${id}`);
    if (res) {
      form.setFieldsValue({
        title: res.title,
        desctiption: res.description,
        date: dayjs(res.date),
        category: res.category,
      });
      setImg(res.image);
      setData(res);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (quill) {
      quill.root.innerHTML = data.data_text;
    }
  }, [data]);

  return (
    <Card title="Update Blog">
      <Form layout="vertical" onFinish={onFinish} form={form}>
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
              <div>
                <div ref={quillRef} />
              </div>
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item name="date" label="Date" rules={[{ required: true }]}>
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} md={4}>
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
          <Col xs={24} md={4}>
            <Image src={`${import.meta.env.VITE_IMG_URL}${img}`} />
          </Col>
          <Col span={24}>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
