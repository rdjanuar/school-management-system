import React, { Fragment, useState, useMemo } from "react";
import { Link, Outlet } from "react-router-dom";

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [id, setId] = useState(0);

  const menus = useMemo(
    () => [
      {
        name: "Perencanaan",
        link: "/perencanaan",
        id: 1,
        submenus: [
          {
            name: "Tahun Pelajaran",
            link: "perencanaan/tahun-pelajaran",
          },
          {
            name: "Kelas",
            link: "perencanaan/kelas",
          },

          {
            name: "Rombongan Belajar",
            link: `perencanaan/rombongan-belajar`,
          },
          {
            name: "KKM",
            link: "perencanaan/KKM",
          },
          {
            name: "Guru Mata Pelajaran",
            link: "perencanaan/mata-pelajaran",
          },
          {
            name: "Guru Ekstrakulikuler",
            link: "perencanaan/ekstrakulikuler",
          },
          {
            name: "Guru Wali Kelas",
            link: "perencanaan/wali-kelas",
          },
          {
            name: "Penugasan Guru",
            link: "perencanaan/penugasan-guru",
          },
        ],
      },
      {
        name: "Penilaian",
        link: "/penilaian",
        id: 2,
        submenus: [
          {
            name: "Nilai Tugas",
            link: "penilaian/tugas",
          },
          {
            name: "Nilai Ulangan Harian",
            link: "penilaian/ulangan-harian",
          },
          {
            name: "Nilai Ekstrakulikuler",
            link: "penilaian/ekstrakulikuler",
          },
          {
            name: "Nilai UTS & UAS",
            link: "penilaian/ulangan",
          },
          {
            name: "Nilai Perilaku Siswa",
            link: "penilaian/perilaku",
          },
        ],
      },
      {
        name: "Laporan",
        link: "/laporan",
        id: 3,
        submenus: [
          {
            name: "Absensi",
            link: "laporan/absensi",
          },
          {
            name: "Kenaikan Kelas",
            link: "laporan/kenaikan-kelas",
          },
          {
            name: "Progress Raport",
            link: "laporan/progress-raport",
          },
          {
            name: "Print Raport",
            link: "laporan/print-raport",
          },
          {
            name: "Print Raport Komentar",
            link: "laporan/print-raport-komentar",
          },
        ],
      },
      {
        name: "Master Data",
        link: "/master-data",
        id: 4,
        submenus: [
          {
            name: "Role",
            link: "data/role",
          },
          {
            name: "User",
            link: "data/user",
          },
          {
            name: "Guru",
            link: "data/guru",
          },
          {
            name: "Siswa",
            link: "data/siswa",
          },
          {
            name: "Pegawai",
            link: "data/pegawai",
          },
          {
            name: "Tingkat",
            link: "data/tingkat",
          },
          {
            name: "Ekstra Kulikuler",
            link: "data/ekstrakulikuler",
          },
        ],
      },
    ],
    []
  );

  return (
    <>
      <aside className=" w-64 text-xl" aria-label="Sidebar">
        <div className="h-screen py-4 px-3 bg-white dark:bg-SidebarColor">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            {menus.map((menu, index) => (
              <li key={index}>
                <div
                  className="flex items-center"
                  onClick={() => setSidebar(!sidebar) || setId(menu.id)}
                >
                  <span className="py-2 mx-2 font-semibold rounded-lg  text-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    {menu.name}
                  </span>
                  {sidebar && menu.id === id ? (
                    <svg
                      className="w-3 h-3 dark:text-white -mx-1 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-3 h-3 dark:text-white -mx-1 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  )}
                </div>
                {sidebar && menu.id === id && (
                  <ul className="space-y-2">
                    {menu.submenus.map(({ name, link }, index) => (
                      <li key={index}>
                        <Link
                          to={link}
                          className="flex items-center p-2 pl-4 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <p className="ml-2">{name}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
