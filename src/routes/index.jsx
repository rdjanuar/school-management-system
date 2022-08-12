import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "../component/header/header.component";
import { Sidebar } from "../component/sidebar/sidebar.component";
import { Kelas } from "./perencanaan/kelas.component";
import { Rombongan_Belajar } from "./perencanaan/rombongan_belajar.component";
import { TahunPelajaran } from "./perencanaan/tahun_pelajaran.component";
import { Ekstrakulikuler } from "./perencanaan/guru/ekstrakulikuler.component";
import { KKM } from "./perencanaan/kkm.component";
import { Mata_Pelajaran } from "./perencanaan/guru/mata_pelajaran.component";
import { WaliKelas } from "./perencanaan/guru/walikelas.component";
import { PenugasanGuru } from "./perencanaan/guru/penugasan_guru.component";
import { Forms } from "./forms/forms.component";
import { NilaiEkstrakulikuler } from "./penilaian/ekstrakulikuler.component";
import { Perilaku } from "./penilaian/perilaku.component";
import { Tugas } from "./penilaian/tugas.component";
import { UlanganHarian } from "./penilaian/ulangan_harian.component";
import { Ulangan } from "./penilaian/uts_uas.component";
import { Absensi } from "./laporan/absensi.component";
import { Kenaikan } from "./laporan/kenaikan.component";
import { Progress } from "./laporan/progress.component";
import { Raport } from "./laporan/raport.component";
import { RaportKomentar } from "./laporan/raport_komentar.component";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex overflow-x-hidden ">
            <Sidebar />
            <Header name={"Iin Brutal"} />
          </div>
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
      </Route>

      <Route path="/form" element={<Forms />} />
    </Routes>
  );
};
