import { Container } from "./style";
import { Button, Col, Form, Input, message, Row, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { UploadCloud } from "lucide-react";
import axios from "axios";

const Box = ({ mode, width }) => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);
      formData.append("file", values.file?.fileList[0]?.originFileObj || "");

      message.loading({ content: "Yuborilmoqda", key: "l" });
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_API}/appeal`,
        formData
      );

      if (res.status === 201) {
        message.success({ content: "Muvaffaqiyatli yuborildi", key: "l" });
        form.setFieldsValue({ name: "", email: "", message: "" });
      } else {
        throw new Error();
      }
    } catch (e) {
      message.error({ content: "Xatolik yuz berdi", key: "l" });
    }
  };

  return (
    <Container data-aos="zoom-in" $mode={mode} $width={width}>
      <div className="box">
        <div className="box__title">Ariza va murojaatlar</div>
        <br />
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Row>
            <Col span={24}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Ismingizni kiriting" }]}
              >
                <Input placeholder="F.I.SH" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Emailingizni kiriting" }]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="message"
                rules={[{ required: true, message: "Xabaringizni kiriting" }]}
              >
                <TextArea placeholder="Xabar" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="file"
                rules={[{ required: true, message: "Faylni yuklang" }]}
              >
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button icon={<UploadCloud size={16} />}>Fayl yuklash</Button>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Yuborish
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default Box;
