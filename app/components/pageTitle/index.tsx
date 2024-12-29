import { Link } from "@remix-run/react";
import { MoveLeft } from "lucide-react";

type Props = {
  title: string;
  url: string;
};

export const PageTitle = ({ title, url }: Props) => {
  return (
    <div className="flex items-center">
      <Link to={url} className="flex">
        <MoveLeft className="h-5 w-5 text-gray-500" />
      </Link>
      <h1 className="font-bold text-2xl ml-2">{title}</h1>
    </div>
  );
};
