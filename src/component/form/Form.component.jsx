import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../buttons/buttons.component";
import { yupResolver } from "@hookform/resolvers/yup";
import { validatorSchema } from "../../utils/helper";

export const Form = ({ onSubmit, template }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validatorSchema()),
  });

  const { tittle, fields } = template;

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
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            {...register(name, { required: true })}
          />
          {errors[name] && (
            <>
              <span className="text-red-500 text-sm">
                {errors[name].message}
              </span>
            </>
          )}
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="font-semibold text-white text-center">{tittle}</h2>
        {renderFields(fields)}
        <Button name={"Submit"} />
      </form>
    </div>
  );
};
