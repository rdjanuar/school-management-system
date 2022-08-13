import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export const Forms = () => {
  const { register, handleSubmit, errors } = useForm();

  const onsubmit = async ({ title, body }) => {
    return await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
    });
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          tittle
        </label>
        <input
          type="text"
          name="title"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          {...register("title", { required: true })}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="body"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Body
        </label>
        <input
          type="text"
          name="body"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          {...register("body", { required: true })}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};
