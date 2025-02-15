"use client";

import { ComponentPropsWithoutRef } from "react";
import {
  FieldErrors,
  FieldName,
  FieldValues,
  Message,
  MultipleFieldErrors,
} from "react-hook-form";
import {
  ErrorMessage,
  FieldValuesFromFieldErrors,
} from "@hookform/error-message";

interface ShowErrorProps<T extends FieldValues>
  extends ComponentPropsWithoutRef<"p"> {
  errors?: FieldErrors<T>;
  name: FieldName<FieldValuesFromFieldErrors<FieldErrors<T>>>;
  className?: string;
  multiple?: boolean;
  customMessage?: string;
}

export default function ShowError<T extends FieldValues>({
  errors,
  name,
  multiple = false,
  customMessage,
  ...props
}: ShowErrorProps<T>) {
  const renderError = ({
    message,
    messages,
  }: {
    message: Message;
    messages?: MultipleFieldErrors;
  }) => {
    if (multiple && messages) {
      return Object.entries(messages).map(([type, message]) => (
        <p
          key={type}
          {...props}>
          {message}
        </p>
      ));
    }

    return <p {...props}>{customMessage || message}</p>;
  };

  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={renderError}
    />
  );
}
