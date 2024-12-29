import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { Plus, X } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { FileUploader } from "~/components/fileUpload";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { z } from "zod";
import { useToast } from "~/hooks/use-toast";
import { DatePicker } from "~/components/ui/datePicker";
import { PageTitle } from "~/components/pageTitle";
import { prisma } from "~/utils/prismaServer";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

const schema = z.object({
  familyName: z.string({ required_error: "姓は必須です" }),
  lastName: z.string({ required_error: "名は必須です" }),
  birthDate: z.string({ required_error: "生年月日は必須です" }),
  contents: z.string({ required_error: "施術内容を選択してください" }),
  conversation: z.string({ required_error: "会話内容を入力してください" }),
  label: z.string().optional(),
});

export const meta: MetaFunction = () => {
  return [{ title: "New Clients" }];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  return submission.reply();
}
export const loader = async () => {
  const menu = await prisma.menu.findMany();
  return menu;
};

export default function Index() {
  const menu = useLoaderData<typeof loader>();
  const lastResult = useActionData<typeof action>();
  const [form, fields] = useForm({
    shouldValidate: "onBlur",
    shouldRevalidate: "onBlur",
    defaultValue: {
      familyName: "",
      lastName: "",
      birthDate: "",
      contents: menu[menu.findIndex((item) => !item.is_deleted)].menu_name,
      conversation: "",
      label: "",
    },
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
  });

  const [labels, setLabels] = useState<string[]>([]);
  const [text, setText] = useState("");

  const addLabel = (item: string) => {
    setLabels((prev) => [...prev, item]);
    setText("");
  };

  const removeLabel = (itemToRemove: string) => {
    setLabels((prev) => prev.filter((item) => item !== itemToRemove));
  };

  const { toast } = useToast();
  useEffect(() => {
    if (lastResult?.status === "success") {
      form.reset();
      toast({
        duration: 3000,
        title: "新規追加が完了しました",
      });
    }
  }, [lastResult]);

  return (
    <div>
      <PageTitle title="新規追加" url="/clients/" />
      <div className="mt-5">
        <Form method="POST" {...getFormProps(form)}>
          <div className="mb-4">
            <div className="flex items-center">
              <Label
                htmlFor={fields.familyName.id}
                className="block text-sm font-medium text-gray-700"
              >
                姓
              </Label>
              <div className="ml-2 text-sm font-medium text-red-400">
                {fields.familyName.errors}
              </div>
            </div>
            <Input
              {...getInputProps(fields.familyName, { type: "text" })}
              placeholder="入力してください"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <Label
                htmlFor={fields.lastName.id}
                className="block text-sm font-medium text-gray-700"
              >
                名
              </Label>
              <div className="ml-2 text-sm font-medium text-red-400">
                {fields.lastName.errors}
              </div>
            </div>
            <Input
              {...getInputProps(fields.lastName, { type: "text" })}
              placeholder="入力してください"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <Label
                htmlFor={fields.familyName.id}
                className="block text-sm font-medium text-gray-700"
              >
                生年月日
              </Label>
              <div className="ml-2 text-sm font-medium text-red-400">
                {fields.birthDate.errors}
              </div>
            </div>
            <div className="mt-1">
              <DatePicker
                meta={{
                  id: fields.birthDate.id,
                  name: fields.birthDate.name,
                  initialValue: fields.birthDate.initialValue ?? "",
                }}
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <div className="block text-sm font-medium text-gray-700">
                施術内容
              </div>
              <div className="ml-2 text-sm font-medium text-red-400">
                {fields.contents.errors}
              </div>
            </div>
            <RadioGroup
              className="mt-1"
              id={fields.contents.id}
              name={fields.contents.name}
              defaultValue={fields.contents.initialValue}
              onValueChange={(value) => {
                form.update({
                  name: fields.contents.name,
                  value,
                });
              }}
            >
              {menu.map((item) => (
                <Card key={item.menu_id}>
                  <CardHeader className="p-4">
                    <CardTitle className="flex">
                      <RadioGroupItem
                        id={item.menu_id.toString()}
                        value={item.menu_name}
                      />
                      <Label
                        className="flex-1 ml-4"
                        htmlFor={item.menu_id.toString()}
                      >
                        {item.menu_name}
                      </Label>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </RadioGroup>
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <Label
                htmlFor={fields.conversation.id}
                className="block text-sm font-medium text-gray-700"
              >
                会話内容
              </Label>
              <div className="ml-2 text-sm font-medium text-red-400">
                {fields.conversation.errors}
              </div>
            </div>
            <Textarea
              {...getInputProps(fields.conversation, { type: "text" })}
              placeholder="入力してください"
              className="mt-1 block w-full h-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor={fields.label.id}
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
                {...getInputProps(fields.label, { type: "text" })}
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
            <Button className="w-full" type="submit">
              新規追加
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
