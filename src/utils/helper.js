import * as yup from "yup";

export const setTheme = (theme) => {
  return localStorage.setItem("theme", theme);
};

export const getTheme = () => {
  return localStorage.getItem("theme" || null);
};

export const setToken = (token) => {
  return localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token" || null);
};

export const setUser = (user) => {
  return localStorage.setItem("user", JSON.stringify(user));
};

export const userData = (key) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user[key];
};

export const setCookie = (name, value, days) => {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

export const getCookie = (cname) => {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const checkCookie = (name) => {
  const user = getCookie(name);
  if (user !== "") {
    return true;
  } else {
    return false;
  }
};

export const determineRoles = (user, roles) => {
  return user.map((p) => p.nama).filter((p) => roles.includes(p)).length;
};

export const logout = (callback) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  clearCookie("token");
  callback();
};

export const clearCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

export const isLogin = () => {
  return getToken() && localStorage.getItem("user");
};

export const validatorYayasanSchema = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid Email"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password not match"),
    nama: yup.string().required().min(4).max(16),
    no_telepon: yup.string().required().min(4).max(16),
    alamat: yup.string().required().min(4).max(16),
    website: yup.string().required().min(4).max(16),
    logo: yup.string().required().min(4).max(16),
  });

  return schema;
};

export const validatorAuthSchema = () => {
  const schema = yup.object().shape({
    username: yup.string().required().min(3),
    password: yup.string().required().min(6),
  });

  return schema;
};

export const menusDashboard = [
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
];

export const menuSetting = [
  {
    name: "Pengaturan",
    link: "/setting",
    id: 1,
    submenus: [
      {
        name: "Pengaturan Akun",
        link: "akun",
      },
    ],
  },
];
