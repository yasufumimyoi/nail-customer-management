import type { MetaFunction } from "@remix-run/node";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";

export const meta: MetaFunction = () => {
  return [{ title: "Settings" }];
};

export default function Index() {
  return (
    <div>
      <h1 className="font-bold text-2xl">設定</h1>
      <ul className="mt-5">
        <li>
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>売上目標</CardTitle>
                  <CardDescription className="mt-1">
                    月々の目標売上などの設定する
                  </CardDescription>
                </div>
                <SquareArrowOutUpRight className="h-5 w-5 text-gray-500" />
              </div>
            </CardHeader>
          </Card>
        </li>
        <li className="mt-3">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>施術メニュー</CardTitle>
                  <CardDescription className="mt-1">
                    提供しているメニューについて設定する
                  </CardDescription>
                </div>
                <SquareArrowOutUpRight className="h-5 w-5 text-gray-500" />
              </div>
            </CardHeader>
          </Card>
        </li>
      </ul>
    </div>
  );
}
