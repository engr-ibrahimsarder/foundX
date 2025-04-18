"use client"
import { Input } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";

interface IProps {
    variant?: "flat" | "bordered" | "faded" | "underlined";
    size?: "sm" | "md" | "lg";
    required?: boolean;
    type?: string;
    label: string;
    name: string;
  }
  

const FXInput = ({
    variant = "bordered",
    size = "md",
    required = false,
    type = "text",
    label,
    name,
  }: IProps) => {
    const {
        register,
        formState: { errors },
      } = useFormContext();
    
  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      variant={variant}
      size={size}
      required={required}
      type={type}
      label={label}
    />
  );
};

export default FXInput;