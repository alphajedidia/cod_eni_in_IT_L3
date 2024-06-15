import { useState, type FC, type HTMLInputTypeAttribute } from "react";
import classNames from "classnames";
import { UseFormRegisterReturn } from "react-hook-form";

import EmailSvg from "@/components/Icons/Svg/EmailSvg";
import HiddenPasswordSvg from "@/components/Icons/Svg/HiddenPasswordSvg";
import ShowPasswordSvg from "@/components/Icons/Svg/ShowPasswordSvg";

type InputProps = {
  type: HTMLInputTypeAttribute;
  id: string;
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: string;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
};

const FormField: FC<InputProps> = (props) => {
  const {
    id,
    type,
    label,
    placeholder,
    error,
    register,
    maxLength,
    minLength,
    max,
    min,
  } = props;
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  return (
    <div className="flex flex-col gap-2 w-fit">
      <label htmlFor={id} className="text-sm text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          type={isPasswordHidden ? type : "text"}
          placeholder={placeholder}
          {...register}
          maxLength={type === "text" ? maxLength : undefined}
          minLength={type === "text" ? minLength : undefined}
          max={type === "number" ? max : undefined}
          min={type === "number" ? min : undefined}
          className={classNames(
            "h-[44px] w-[400px] text-gray-700 px-4 text-base rounded-md border  outline-none  focus:ring-offset-2 focus:ring-2 focus:ring-sky-300 hover:ring-sky-600 placeholder:text-gray-400 placeholder:text-sm",
            error && "border-red-300",
            !error && "border-gray-300"
          )}
        />
        {type === "email" && (
          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <EmailSvg className="size-4 text-gray-400" />
          </span>
        )}

        {type === "password" && (
          <button
            className="absolute inset-y-0 end-0 grid place-content-center px-4"
            onClick={(event) => {
              event.preventDefault();
              setPasswordHidden(!isPasswordHidden);
            }}
          >
            {isPasswordHidden ? (
              <HiddenPasswordSvg className="size-4 text-gray-400" />
            ) : (
              <ShowPasswordSvg className="size-4 text-gray-400" />
            )}
          </button>
        )}

        {type === "number" && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-700 text-xl font-semibold">Ar</span>
          </span>
        )}
      </div>
      {props.error && (
        <p className="text-red-500 text-sm block w-[320px]">{error}</p>
      )}
    </div>
  );
};

export default FormField;
