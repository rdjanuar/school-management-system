import { toast } from "react-toastify";

export const errorMessage = (error) => {
  switch (error.message) {
    case "Network Error":
      toast.error("Mohon Cek Koneksi Internet", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "dark:bg-black dark:text-white",
      });
      break;
    case "Request failed with status code 401":
      toast.error("Unauthorized Or Token Expired", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "dark:bg-black dark:text-white",
      });
      break;
    case "Request failed with status code 404":
      toast.error("Data Tidak Ditemukan", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "dark:bg-black dark:text-white",
      });
      break;
    case "Request failed with status code 500":
      toast.error("Server Error", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "dark:bg-black dark:text-white",
      });
      break;

    case "User Anda belum aktif atau Anda salah memasukkan password.":
      toast.error(
        "User Anda belum aktif atau Anda salah memasukkan password.",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: "dark:bg-black dark:text-white",
        }
      );
    default:
      break;
  }

  return error;
};

export const errorMessageAuth = (error) => {
  switch (error.response.data.message) {
    case "User Anda belum aktif atau Anda salah memasukkan password.":
      toast.error(
        "User Anda belum aktif atau Anda salah memasukkan password.",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: "dark:bg-black dark:text-white",
        }
      );
    default:
      break;
  }

  return error;
};
