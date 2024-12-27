import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { SearchInput } from "~/components/searchInput/index";
import { LoaderFunction } from "@remix-run/node";
import { prisma } from "~/utils/prismaServer";
import axios from "axios";
import { load } from "cheerio";

export const meta: MetaFunction = () => {
  return [{ title: "Home" }];
};

export const loader: LoaderFunction = async () => {
  const users = await prisma.user.findMany();
  const rankingData = await getRankingData();

  return { users, rankingData };
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const rankingData = data.rankingData;

  return (
    <div>
      <h1 className="font-bold text-2xl">顧客管理システム</h1>
      <div className="mt-4">
        <SearchInput />
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-lg">今週の人気デザイン</h2>
        <ul className="grid grid-cols-2 gap-2 mt-2">
          {rankingData.map(
            (item: { image: string; url: string }, index: number) => (
              <li key={index}>
                <a href={item.url} target="_blank">
                  <img className="rounded-lg" src={item.image} alt="" />
                </a>
              </li>
            )
          )}
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

const getRankingData = async () => {
  const response = await axios.get("https://beauty.hotpepper.jp/nail/");
  const $ = load(response.data);
  const images = $(".nailRankingPhoto img");
  const url = $(".nailRankingPhoto a");
  let result = [];
  for (let i = 0; i < images.length; i++) {
    result.push({
      image: images[i].attribs.src,
      url: url[i].attribs.href,
    });
  }

  return result;
};
