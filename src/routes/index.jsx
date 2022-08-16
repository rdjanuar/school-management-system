import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "../component/header/header.component";
import { Sidebar } from "../component/sidebar/sidebar.component";
import { Kelas } from "../pages/perencanaan/kelas.component";
import { Rombongan_Belajar } from "../pages/perencanaan/rombongan_belajar.component";
import { TahunPelajaran } from "../pages/perencanaan/tahun_pelajaran.component";
import { Ekstrakulikuler } from "../pages/perencanaan/guru/ekstrakulikuler.component";
import { KKM } from "../pages/perencanaan/kkm.component";
import { Mata_Pelajaran } from "../pages/perencanaan/guru/mata_pelajaran.component";
import { WaliKelas } from "../pages/perencanaan/guru/walikelas.component";
import { PenugasanGuru } from "../pages/perencanaan/guru/penugasan_guru.component";
import { NilaiEkstrakulikuler } from "../pages/penilaian/ekstrakulikuler.component";
import { Perilaku } from "../pages/penilaian/perilaku.component";
import { Tugas } from "../pages/penilaian/tugas.component";
import { UlanganHarian } from "../pages/penilaian/ulangan_harian.component";
import { Ulangan } from "../pages/penilaian/uts_uas.component";
import { Absensi } from "../pages/laporan/absensi.component";
import { Kenaikan } from "../pages/laporan/kenaikan.component";
import { Progress } from "../pages/laporan/progress.component";
import { Raport } from "../pages/laporan/raport.component";
import { RaportKomentar } from "../pages/laporan/raport_komentar.component";
import { Role } from "../pages/master_data/role.component";
import { User } from "../pages/master_data/user.component";
import { Guru } from "../pages/master_data/guru.component";
import { DataEkstrakulikuler } from "../pages/master_data/ekstrakulikuler.component";
import { Siswa } from "../pages/master_data/siswa.component";
import { Pegawai } from "../pages/master_data/pegawai.component";
import { Tingkat } from "../pages/master_data/tingkat.component";
import { Login } from "../pages/auth/Login.component";
import { Register } from "../pages/auth/Register.component";
import { Authenticated } from "../component/404/Unauthenticated";
import { PageNotFound } from "../component/404/Notfound";
import { Expired } from "../component/404/Expired";
import { CreateYayasan } from "../pages/yayasan/CreateYayasan.component";
import { SettingAccount } from "../component/user/Setting.component";
import { menusDashboard, menuSetting } from "../utils/helper";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <Authenticated>
            <Expired>
              <div className="flex overflow-x-hidden ">
                <Sidebar menus={menusDashboard} />
                <Header />
              </div>
            </Expired>
          </Authenticated>
        }
      >
        <Route path="perencanaan">
          <Route path="tahun-pelajaran" element={<TahunPelajaran />} />
          <Route path="rombongan-belajar" element={<Rombongan_Belajar />} />
          <Route path="kelas" element={<Kelas />} />
          <Route path="ekstrakulikuler" element={<Ekstrakulikuler />} />
          <Route path="KKM" element={<KKM />} />
          <Route path="mata-pelajaran" element={<Mata_Pelajaran />} />
          <Route path="wali-kelas" element={<WaliKelas />} />
          <Route path="penugasan-guru" element={<PenugasanGuru />} />
        </Route>
        <Route path="penilaian">
          <Route path="ekstrakulikuler" element={<NilaiEkstrakulikuler />} />
          <Route path="perilaku" element={<Perilaku />} />
          <Route path="tugas" element={<Tugas />} />
          <Route path="ulangan-harian" element={<UlanganHarian />} />
          <Route path="ulangan" element={<Ulangan />} />
        </Route>
        <Route path="laporan">
          <Route path="absensi" element={<Absensi />} />
          <Route path="kenaikan-kelas" element={<Kenaikan />} />
          <Route path="progress-raport" element={<Progress />} />
          <Route path="print-raport" element={<Raport />} />
          <Route path="print-raport-komentar" element={<RaportKomentar />} />
        </Route>
        <Route path="data">
          <Route path="role" element={<Role />} />
          <Route path="user" element={<User />} />
          <Route path="guru" element={<Guru />} />
          <Route path="siswa" element={<Siswa />} />
          <Route path="pegawai" element={<Pegawai />} />
          <Route path="tingkat" element={<Tingkat />} />
          <Route path="ekstrakulikuler" element={<DataEkstrakulikuler />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
      <Route path="form">
        <Route path="yayasan" element={<CreateYayasan />} />
      </Route>
      <Route
        path="/settings"
        element={
          <Authenticated>
            <Expired>
              <div className="flex overflow-x-hidden ">
                <Sidebar menus={menuSetting} />
                <Header />
              </div>
            </Expired>
          </Authenticated>
        }
      >
        <Route path="akun" element={<SettingAccount />} />
      </Route>
    </Routes>
  );
};
