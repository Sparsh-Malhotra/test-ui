import { UseFormReturn } from "react-hook-form";

export interface IFormResponse {
  name: string;
  phoneNumber: string;
  age: string;
  city: string;
  company: string;
  chiefComplaints: string;
  hasPreviousExperience?: "yes" | "no";
}

export interface IFormProps {
  form: UseFormReturn<IFormResponse, any, undefined>;
}
