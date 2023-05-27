import { Item } from "./components/Item";
import { Wrapper } from "./components/Wrapper";

export const App = () => (
  <div>
    <h1>React無限スクロール</h1>

    <Wrapper>
      {[...Array(11)].map((_, index) => {
        return <Item index={index} />;
      })}
    </Wrapper>
  </div>
);
