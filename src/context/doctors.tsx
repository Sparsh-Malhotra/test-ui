"use client";

import { IDoctor } from "@/models/doctor";
import { PropsWithChildren, createContext, useState } from "react";

interface DoctorsContextProps {
  doctors: IDoctor[] | null;
  setDoctors: React.Dispatch<React.SetStateAction<IDoctor[] | null>>;
}

export const DoctorsContext = createContext<DoctorsContextProps | undefined>(
  undefined
);

export const DoctorsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [doctors, setDoctors] = useState<IDoctor[] | null>(null);

  return (
    <DoctorsContext.Provider value={{ doctors, setDoctors }}>
      {children}
    </DoctorsContext.Provider>
  );
};
