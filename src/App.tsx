import { ApiCall } from "./apiCall/ApiCall";
import { Minimum } from "./minimum/Minimum";

export const App = () => {
  return (
    <div>
      <h1>React無限スクロール</h1>

      <div style={{ display: "flex", gap: 30 }}>
        <Minimum />
        <ApiCall />
      </div>
    </div>
  );
};
