import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Clients" }];
};

export const loader = async () => {
  const result = Array.from({ length: 3 }).map(() => ({
    url: "https://placehold.jp/400x400.png",
  }));
  return result;
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <div>test</div>
    </div>
  );
}
