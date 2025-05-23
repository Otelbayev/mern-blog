import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import CountUp from "react-countup";
const formatter = (value) => <CountUp end={value} separator="," />;
const App = () => (
  <div>
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Card>
          <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic title="Unmerged" value={93} suffix="/ 100" />
        </Card>
      </Col>
      <Col span={12}>
        <Card variant="borderless">
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card variant="borderless">
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: "#cf1322" }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Active Users"
            value={112893}
            formatter={formatter}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          {" "}
          <Statistic
            title="Account Balance (CNY)"
            value={112893}
            precision={2}
            formatter={formatter}
          />
        </Card>
      </Col>
    </Row>
  </div>
);
export default App;
