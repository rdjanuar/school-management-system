import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";

export const Breadcrubms = () => {
  const location = useLocation();

  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((x) => x);

    return (
      <div className="flex space-x-4 mx-10 mb-10">
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <Breadcrumb key={name} className="font-medium text-sm">
              <BreadcrumbItem>
                {isLast ? (
                  <span className="dark:text-gray-300 text-gray-600">
                    {name[0].toUpperCase() + name.slice(1)}
                  </span>
                ) : (
                  <BreadcrumbLink
                    as={Link}
                    to={routeTo}
                    className="flex items-center dark:text-gray-400"
                  >
                    {name[0].toUpperCase() + name.slice(1)}
                    <BsChevronRight className="translate-x-1/2 w-4 h-3" />
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Breadcrumb>
          );
        })}
      </div>
    );
  };
  return <>{breadCrumbView()}</>;
};
