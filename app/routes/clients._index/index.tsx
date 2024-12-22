import type { MetaFunction } from "@remix-run/node";
import { PlusIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Link, useLoaderData } from "@remix-run/react";

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
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">顧客一覧リスト</h1>
        <Button className="flex">
          <span className="text-sm">新規追加</span>
          <PlusIcon className="h-5 w-5 text-gray-500" />
        </Button>
      </div>
      <ul className="mt-5">
        <li>
          <div>
            <div className="flex">
              <Link to={`/clients/${1}`}>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="" />
                  <AvatarFallback>アイコン</AvatarFallback>
                </Avatar>
              </Link>
              <div className="ml-3 text-sm">
                <div>テストテスト</div>
                <div>
                  <span>最終施術日</span>
                  <span className="ml-1">1日前</span>
                </div>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {data.map((item, index) => (
                <li key={index}>
                  <img className="rounded-lg" src={item.url} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="mt-5">
          <div>
            <div className="flex">
              <Link to="/clients">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="" />
                  <AvatarFallback>アイコン</AvatarFallback>
                </Avatar>
              </Link>
              <div className="ml-3 text-sm">
                <div>テストテスト</div>
                <div>
                  <span>最終施術日</span>
                  <span className="ml-1">1日前</span>
                </div>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {data.map((item, index) => (
                <li key={index}>
                  <img className="rounded-lg" src={item.url} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="mt-5">
          <div>
            <div className="flex">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="" />
                <AvatarFallback>アイコン</AvatarFallback>
              </Avatar>
              <div className="ml-3 text-sm">
                <div>テストテスト</div>
                <div>
                  <span>最終施術日</span>
                  <span className="ml-1">1日前</span>
                </div>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {data.map((item, index) => (
                <li key={index}>
                  <img className="rounded-lg" src={item.url} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
