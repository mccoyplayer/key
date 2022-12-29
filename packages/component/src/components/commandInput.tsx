import clsx from "clsx";
import { Combobox } from "@headlessui/react";
import { CommandInputProps } from "../interfaces/commandInterface";

const CommandInput = ({
  className,
  icon,
  onChange,
  inputClassName,
  placeholder,
}: CommandInputProps) => {
  return (
    <div className={clsx(`flex items-center p-2 space-x-1`, className ?? "")}>
      {icon}
      <Combobox.Input
        as="input"
        autoComplete="off"
        onChange={onChange}
        className={clsx(
          `w-full h-10 pl-2 bg-transparent border-none focus:outline-none`,
          inputClassName ?? "dark:text-neutral-200"
        )}
        placeholder={placeholder ?? "Type a command or search..."}
      />
    </div>
  );
};

export default CommandInput;
