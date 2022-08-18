import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../buttons/buttons.component";
import {
  validatorAuthSchema,
  validatorYayasanSchema,
} from "../../utils/helper";

export const Form = ({ onSubmit, template, height }) => {
  const { tittle, fields } = template;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:
      template.tittle === "Login"
        ? yupResolver(validatorAuthSchema())
        : yupResolver(validatorYayasanSchema()),
  });

  const renderFields = (fields) => {
    return fields.map((field) => {
      const { title, type, name } = field;

      return (
        <div className="mb-6" key={name}>
          <label
            htmlFor={name}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {title}
          </label>
          <input
            type={type}
            name={name}
            autoComplete={`current-${name}`}
            className={
              fields.disabled === true
                ? "bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                : "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            }
            {...register(name, { required: true })}
            defaultValue={field.defaultvalue}
            disabled={field.disabled}
            readOnly={field.readonly}
          />
          {errors[name] && (
            <>
              <span className="text-red-500 text-sm">
                {errors[name]?.message}
              </span>
            </>
          )}
        </div>
      );
    });
  };

  return (
    <div
      className={`flex flex-col justify-center items-center  bg-gray-800 ${height}`}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="font-semibold text-white text-center">{tittle}</h2>
        {renderFields(fields)}
        <Button name={"Submit"} />
      </form>
    </div>
  );
};
