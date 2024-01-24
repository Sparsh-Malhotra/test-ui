"use client";

import { DoctorsContext } from "@/context/doctors";
import { LoadingContext } from "@/context/loading";
import { IDoctor } from "@/models/doctor";
import { useContext, useEffect, useRef } from "react";

const DoctorCard = ({ doctor }: { doctor: IDoctor }) => (
  <div className="flex items-center justify-between w-full rounded-lg border px-4 py-3 border-white cursor-pointer">
    <div className="flex items-center gap-8">
      <p className="text-white">{doctor.name}</p>
      <div className="flex items-center gap-x-2">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
        </svg>
        <p className="text-white">{doctor.expertise}</p>
      </div>
      <div className="flex items-center gap-x-2">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 384 512"
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
        </svg>
        <p className="text-white">{doctor.city}</p>
      </div>
    </div>
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 320 512"
      className="w-4 h-4 text-gray-500 dark:text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
    </svg>
  </div>
);

const DoctorsList = () => {
  const loadingCtx = useContext(LoadingContext);
  const doctorsCtx = useContext(DoctorsContext);

  const doctorsListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    doctorsListRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [doctorsCtx?.doctors]);

  if (!doctorsCtx?.doctors) return null;

  return (
    <div
      ref={doctorsListRef}
      className="flex flex-col items-center justify-center gap-6 bg-dark-1 px-4 py-12 gap-y-6 sm:px-6 lg:me-0 lg:py-8 lg:ps-8 xl:py-8"
    >
      <p className="text-2xl text-gray-300 font-semibold">Available Doctors</p>
      {!!loadingCtx?.loading && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          stroke="currentColor"
          className="text-white"
        >
          <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="0.75s"
              values="0 12 12;360 12 12"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      )}
      {doctorsCtx?.doctors?.length ? (
        doctorsCtx.doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))
      ) : (
        <p className="text-white">
          No Doctors available for consultation right now!!
        </p>
      )}
    </div>
  );
};

export default DoctorsList;
