import type { MetaFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { useState } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { MoveLeft, Plus, X } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { FileUploader } from "~/components/fileUpload";

export const meta: MetaFunction = () => {
  return [{ title: "New Clients" }];
};

export default function Index() {
  const [labels, setLabels] = useState<string[]>([]);
  const [text, setText] = useState("");

  const addLabel = (item: string) => {
    setLabels((prev) => [...prev, item]);
    setText("");
  };

  const removeLabel = (itemToRemove: string) => {
    setLabels((prev) => prev.filter((item) => item !== itemToRemove));
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">新規追加</h1>
        <Link to="/clients/" className="flex">
          <MoveLeft className="h-5 w-5 text-gray-500" />
        </Link>
      </div>
      <div className="mt-5">
        <Form>
          <div className="mb-4">
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              名前
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="入力してください"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              年齢
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="入力してください"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              施術内容
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="入力してください"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              会話内容
            </Label>
            <Textarea
              id="name"
              placeholder="入力してください"
              className="mt-1 block w-full h-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              ラベル
            </Label>
            {labels.length > 0 && (
              <ul className="mt-1 mb-2">
                {labels.map((item, index) => (
                  <li className="mb-1 flex" key={index}>
                    <Badge className="mr-2" variant="outline">
                      {item}
                    </Badge>
                    <Button
                      size="icon"
                      variant="remove"
                      onClick={() => removeLabel(item)}
                    >
                      <X className="h-5 w-5 text-gray-500" />
                    </Button>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex items-center">
              <Input
                id="name"
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="入力してください"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                className="ml-2"
                type="button"
                disabled={!text}
                onClick={() => addLabel(text)}
              >
                <Plus className="h-5 w-5 text-white" />
              </Button>
            </div>
          </div>
          <div className="mb-4">
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              施術画像
            </Label>
            <div className="mt-2">
              <FileUploader />
            </div>
          </div>
          <div className="mt-5">
            <Button className="w-full">新規追加</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
