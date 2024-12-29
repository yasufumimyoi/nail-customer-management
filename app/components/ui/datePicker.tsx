import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { useRef } from "react";
import { unstable_useControl as useControl } from "@conform-to/react";

type Props = {
  meta: {
    id: string;
    name: string;
    initialValue: string;
  };
};

export const DatePicker = ({ meta }: Props) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const control = useControl(meta);

  return (
    <div>
      <input
        className="sr-only"
        aria-hidden
        tabIndex={-1}
        ref={control.register}
        id={meta.id}
        name={meta.name}
        defaultValue={
          meta.initialValue ? new Date(meta.initialValue).toISOString() : ""
        }
        onFocus={() => {
          triggerRef.current?.focus();
        }}
      />
      <Popover>
        <PopoverTrigger asChild>
          <Button
            ref={triggerRef}
            variant={"outline"}
            className={cn(
              "w-64 justify-start text-left font-normal focus:ring-2 focus:ring-stone-950 focus:ring-offset-2",
              !control.value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {control.value ? (
              format(control.value, "yyyy年MM月dd日")
            ) : (
              <span>選択してください</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            locale={ja}
            mode="single"
            selected={new Date(control.value ?? "")}
            onSelect={(value) => control.change(value?.toISOString() ?? "")}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
