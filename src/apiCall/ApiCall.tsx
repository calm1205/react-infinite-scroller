import { useQuery } from "@tanstack/react-query";

/**
 * APIコールを含む無限スクロール
 */
export const ApiCall = () => {
  const queryFn = async () =>
    (await fetch("https://api.sampleapis.com/beers/ale")).json();

  const { data } = useQuery({ queryKey: ["sampleQuery"], queryFn });
  console.log(data);

  return (
    <div>
      <h2>API呼び出し</h2>
    </div>
  );
};
