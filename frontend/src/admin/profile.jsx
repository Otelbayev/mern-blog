import { Button, Card, Col, Flex, Form, Image, Input, Row, Upload } from "antd";

import { UploadCloudIcon } from "lucide-react";
import { useAuth } from "../context/auth-context";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";
import ava from "../assets/ava.png";
import { useUpdate } from "../hooks/useUpdate";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const {
    auth: { user },
    logout,
  } = useAuth();

  const [form] = useForm();
  const { update } = useUpdate();
  const navigate = useNavigate();

  useEffect(() => {
    form.setFieldsValue({
      name: user.name,
      surname: user.surname,
      fathers_name: user.fathers_name,
      username: user.username,
      email: user.email,
    });
  }, [user]);
  const onFinish = async (values) => {
    const res = await update("/auth/update", values);
    if (res) {
      logout();
      navigate("/login-as-admin");
    }
  };
  return (
    <div className="flexflex">
      <Card style={{ flex: 1 }}>
        <Image src={ava} />
        <div style={{ textAlign: "center" }}>
          <h1>
            {user.surname} {user.name}
          </h1>
          <h1>{user.fathers_name}</h1>
        </div>
      </Card>
      <Card style={{ flex: 3 }} title="Profile">
        <Form onFinish={onFinish} layout="vertical" form={form}>
          <Row gutter={[10, 10]}>
            <Col xs={24} md={12}>
              <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="surname"
                label="Surname"
                rules={[{ required: true }]}
              >
                <Input placeholder="Surname" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="fathers_name"
                label="Patronymic"
                rules={[{ required: true }]}
              >
                <Input placeholder="Patronymic" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="username"
                label="Username"
                rules={[{ required: true }]}
              >
                <Input placeholder="Username" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true }]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
}
