import React from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_API}/auth/login`,
      values
    );

    if (res.status === 200) {
      login(res.data.user);
      localStorage.setItem("token", res.data?.token);
      localStorage.setItem("data", JSON.stringify(res.data?.user));
      navigate("/admin-home");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f0f2f5, #d6e4ff)",
      }}
    >
      <Card
        style={{ width: 360, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        bordered={false}
      >
        <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
          Login
        </Title>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Enter your username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter your password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
