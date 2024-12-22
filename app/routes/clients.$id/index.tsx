import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { MoveLeft } from "lucide-react";
import { Badge } from "~/components/ui/badge";

export const meta: MetaFunction = () => {
  return [{ title: "Client Detail" }];
};

export const loader = async () => {
  const images = Array.from({ length: 3 }).map(() => ({
    url: "https://placehold.jp/400x400.png",
  }));
  return {
    images,
    badges: [
      "定額",
      "背が高い",
      "メガネ",
      "ショートカット",
      "あまり喋らないタイプ",
    ],
  };
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">顧客詳細</h1>
        <Link className="flex" to="/clients">
          <MoveLeft className="h-5 w-5 text-gray-500" />
        </Link>
      </div>
      <div className="mt-5">
        <Avatar>
          <AvatarImage
            className="rounded-full w-1/3"
            src="https://github.com/shadcn.png"
            alt=""
          />
          <AvatarFallback>アイコン</AvatarFallback>
        </Avatar>
        <div className="mt-5">
          <div className="font-bold text-lg">稲村凌香</div>
          <div className="text-sm mt-2">
            <span className="">初回施術日</span>
            <span className="ml-1">2024年12月1日</span>
          </div>
        </div>
        <div className="mt-5">
          <div className="text-sm font-bold">施術画像</div>
          <ul className="grid grid-cols-2 gap-2 mt-4">
            {data.images.map((item, index) => (
              <li key={index}>
                <img className="rounded-lg" src={item.url} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <div className="text-sm font-bold">施術内容</div>
          <div className="text-sm mt-2">
            定額シンプルデザイン♪《オフ込み》¥7900→¥6900
          </div>
        </div>
        <div className="mt-5">
          <div className="text-sm font-bold">会話内容</div>
          <div className="text-sm mt-2">
            蒲田近くで勤務している。ネイルサロンを転々としている模様。おすすめの居酒屋を教えてもらった。
          </div>
        </div>
        <div className="mt-5">
          <div className="text-sm font-bold">ラベル</div>
          <ul className="flex flex-wrap">
            {data.badges.map((item, index) => (
              <li className="mr-2 mt-1" key={index}>
                <Badge variant="outline">{item}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
