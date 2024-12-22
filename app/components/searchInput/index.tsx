import { Input } from "~/components/ui/input";
import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-5 w-5 text-gray-500" />
      </div>
      <Input
        type="text"
        placeholder="顧客名を入力してください"
        className="pl-10"
      />
    </div>
  );
};
