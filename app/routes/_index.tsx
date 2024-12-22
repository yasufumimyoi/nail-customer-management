import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { SearchInput } from "~/components/searchInput/index";

export const meta: MetaFunction = () => {
  return [{ title: "Home" }];
};

export const loader = async () => {
  const result = Array.from({ length: 6 }).map(() => ({
    url: "https://placehold.jp/400x400.png",
  }));
  return result;
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h1 className="font-bold text-2xl">顧客管理システム</h1>
      <div className="mt-4">
        <SearchInput />
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-lg">今週の人気デザイン</h2>
        <ul className="grid grid-cols-2 gap-2 mt-2">
          {data.map((item, index) => {
            return (
              <li key={index}>
                <img src={item.url} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-4">
        <div className="font-bold text-lg">今月のレポート</div>
        <div className="flex mt-2 items-center justify-between">
          <div className="w-1/3 text-sm">
            <div>売上金額</div>
            <div>10,0000円</div>
          </div>
          <div className="relative w-2 h-2 rounded-full bg-green-500" />
        </div>
        <div className="flex mt-2 items-center justify-between">
          <div className="w-1/3 text-sm">
            <div>施術人数</div>
            <div>20人</div>
          </div>
          <div className="relative w-2 h-2 rounded-full bg-green-500" />
        </div>
        <div className="flex mt-2 items-center justify-between">
          <div className="w-1/3 text-sm">
            <div>進捗率</div>
            <div>50%</div>
          </div>
          <div className="relative w-2 h-2 rounded-full bg-green-500" />
        </div>
      </div>
    </div>
  );
}
