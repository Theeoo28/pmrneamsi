import React from "react";
import {DataSi} from "./DataSi";
import { BsChevronDown } from 'react-icons/bs';

export function SiComp ()  {
  return (
    <div className="bg-slate-300 flex justify-center min-h-screen overflow-hidden">
      <div className="max-w-5xl pt-40 mb-20">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Struktur <span className="text-sky-600">Inti</span>{" "}
              <span className="bg-gradient-to-tl from-lime-700 to-red-600 bg-clip-text text-transparent">
                Organisasi
              </span>{" "}
              PMR <span className="text-amber-500">Wira</span> unit SMKN 6 Kota
              Bekasi
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Berikut adalah nama-nama orang yang terkait
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {DataSi.map((person, id) => (
              <li key={id}>
                <div className="relative overflow-hidden">
                  <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-20 opacity-0 cursor-pointer"/>
                  <div className="flex items-center gap-x-6 p-2">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={person.photoUrl}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person.nama}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {person.jabatan}
                      </p>
                    </div>
                  </div>
                  <BsChevronDown className="absolute right-3 top-8 mr-0 ml-auto transition-all duration-500 rotate-0 peer-checked:rotate-180"/>
                  <div className="flex items-center gap-x-6 px-4 bg-gradient-to-br from-slate-400 to-slate-500 rounded-md transition-all overflow-hidden max-h-0 peer-checked:max-h-[9999px]">
                    <img
                      className="h-16 w-16 rounded-xl "
                      src={person.photoUrl}
                      alt=""
                    />
                    <div className="">
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-amber-900/70">
                      Nama:  {person.nama}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-amber-900/70">
                      Jabatan:  {person.jabatan}
                      </p>
                      <p className="text-sm font-semibold leading-6 text-amber-900/70">
                      Umur:  {person.umur}
                      </p>
                      <p className="text-sm font-semibold leading-6 text-amber-900/70">
                      Kelas:  {person.kelas}
                      </p>
                      <p className="text-sm font-semibold leading-6 text-amber-900/70">
                      Bidang:  {person.bidang}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
