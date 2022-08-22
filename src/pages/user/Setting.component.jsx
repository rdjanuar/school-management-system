import React from "react";
import { useForm } from "react-hook-form";

import avatar from "../../assets/avatar.png";
import { userData } from "../../utils/helper";
import { Button } from "../../component/buttons/buttons.component";

export const SettingAccount = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="mx-auto container ">
      <div className="flex flex-col  items-center border border-black dark:border-white   rounded-lg p-10 mx-10 md:flex-row  ">
        {/* Sementara Hard Code */}
        <div className="flex flex-col">
          <img src={userData("image") || avatar} alt="default-image" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="file"
              name="image"
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold  file:text-violet-700 hover:file:bg-violet-100 my-10 file:bg-violet-200"
              {...register("image")}
            />
          </form>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex  items-center mx-10 flex-wrap space-y-4 md:flex-row ">
            <h1 className="font-semibold dark:text-white mb-1 ">Username</h1>
            <input
              defaultValue={userData("username")}
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("username", { required: true })}
            />
            <h1 className="font-semibold dark:text-white  ">No Telp.</h1>
            <input
              defaultValue={userData("no_telepon")}
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("no_telepon", { required: true })}
            />
            <h1 className="font-semibold dark:text-white ">Email</h1>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={userData("email")}
              {...register("email", { required: true })}
            ></input>
            <Button name={"Submit"} />
          </div>
        </form>
      </div>
    </div>
  );
};
