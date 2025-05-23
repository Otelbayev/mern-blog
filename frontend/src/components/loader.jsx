import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loader() {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 40, color: "white" }} spin />
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(100, 116, 139, 0.5)", // Equivalent to bg-slate-500/50
      }}
    >
      <Spin indicator={antIcon} />
    </div>
  );
}
