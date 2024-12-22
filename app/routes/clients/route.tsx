import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Clients" }];
};

export const loader = async () => {
  const result = Array.from({ length: 6 }).map(() => ({
    url: "https://placehold.jp/400x400.png",
  }));
  return result;
};

export default function Index() {
  return (
    <div>
      <div>test</div>
    </div>
  );
}
