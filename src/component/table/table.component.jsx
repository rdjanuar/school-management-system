import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

import { Button } from "../buttons/buttons.component";
import { Delete } from "../modal/delete.component";
import { Search } from "../search/search.component";

export const Table = ({
  headers,
  data,
  handlerchange,
  onPageChange,
  pageCount,
  onDelete,
  title,
}) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);

  return (
    <div className="mx-auto container">
      <h1 className="m-10 font-bold text-lg dark:text-white">{title}</h1>
      <div className="flex justify-between  mx-10 items-center ">
        <Search handleChange={handlerchange} />
        <Link to={"/form"}>
          <Button name={"Add Data"} />
        </Link>
      </div>
      <div className="overflow-x-auto m-10 relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headers.map((header, index) => {
                return (
                  <th scope="col" className="py-3 px-6" key={index}>
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((datum, index) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={index}
                >
                  {Object.keys(datum).map((value, index) => {
                    return (
                      <td scope="row" className="py-4 px-6" key={index}>
                        {value === "price" ? (
                          <p>$ {datum[value]}</p>
                        ) : (
                          datum[value]
                        )}
                      </td>
                    );
                  })}
                  <td
                    className="flex items-center py-4 px-6 space-x-3"
                    key={index}
                  >
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                    <button
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      onClick={() => setShow(true) || setId(datum.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td>
                {show && (
                  <Delete
                    closeModal={setShow}
                    confirmModal={onDelete}
                    id={id || 1}
                  />
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <ReactPaginate
          className="flex justify-center m-2"
          nextLabel="Next"
          onPageChange={onPageChange}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="Previous"
          activeClassName="active"
          renderOnZeroPageCount={null}
          pageClassName={
            "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }
          previousClassName={
            "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }
          nextClassName={
            "py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }
        />
      </div>
    </div>
  );
};
