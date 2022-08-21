import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useTable, usePagination } from "react-table";

import { Delete } from "../modal/delete.component";
import { Buttons } from "../buttons/buttons.action.component";
import { userData } from "../../utils/helper";

export const Table = ({
  headers,
  data,
  onPageChange,
  pageCount,
  onDelete,
  title,
  url,
}) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);

  const columns = useMemo(
    () =>
      headers.map((header) => ({
        Header: header,
      })),
    [headers]
  );

  const { headerGroups, prepareRow, page } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  return (
    <>
      <div className="mx-auto container  ">
        <h1 className="mx-10  m-7 font-bold text-lg dark:text-white">
          {title}
        </h1>

        <div className="overflow-x-auto  mx-10 my-10 relative shadow-md sm:rounded-lg">
          <table className="w-full  text-sm text-left  text-gray-500 bg-white dark:bg-gray-800 dark:text-gray-400 ">
            <thead className=" text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      scope="col"
                      className="py-3 px-6 shadow-sm"
                      key={column.id}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {Object.keys(row.original).map((key, index) => {
                      return (
                        <td
                          className="py-3 px-6 text-black dark:text-gray-400 "
                          key={index}
                        >
                          {row.original[key]}
                        </td>
                      );
                    })}
                    <td className="py-3 px-6 whitespace-nowrap space-x-2">
                      <Link
                        to={`/${url}/${userData("sekolah_id")}/${
                          row.original.id
                        }`}
                      >
                        <Buttons name={"Edit"} color={"blue"} />
                      </Link>
                      <Buttons
                        handlerClick={() => {
                          setShow(true);
                          setId(row.original.id);
                        }}
                        name={"Delete"}
                        color={"red"}
                      />
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
            className="flex justify-center items-center dark:bg-gray-800 bg-white "
            nextLabel="Next"
            onPageChange={onPageChange}
            pageRangeDisplayed={3}
            marginPagesDisplayed={5}
            pageCount={pageCount}
            previousLabel="Previous"
            activeClassName="dark:bg-slate-700 dark:bg-slate-700 dark:text-white bg-gray-200  text-black"
            renderOnZeroPageCount={null}
            pageClassName={
              "py-2 px-3 leading-tight text-gray-500 bg-zinc-50 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white bg-white "
            }
            previousClassName={
              "py-2 px-3 ml-0 leading-tight text-gray-500 bg-zinc-50 rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            }
            nextClassName={
              "py-2 px-3 leading-tight text-gray-500 bg-zinc-50 rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            }
          />
        </div>
      </div>
    </>
  );
};
