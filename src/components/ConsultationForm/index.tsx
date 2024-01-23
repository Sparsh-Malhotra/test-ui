"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { formSteps } from "@/constants";
import ContactDetailsForm from "./ContactDetailsForm";
import PersonalDetailsForm from "./PersonalDetailsForm";
import ChiefComplaintForm from "./ChiefComplaintForm";
import ExperienceForm from "./ExperienceForm";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormResponse } from "@/models/formResponse";
import { LoadingContext } from "@/context/loading";
import { DoctorsContext } from "@/context/doctors";
import { useSearchParams } from "next/navigation";

const ConsultationForm = () => {
  const city = useSearchParams().get("city") || "";
  const form = useForm<IFormResponse>({
    defaultValues: {
      age: "",
      chiefComplaints: "",
      city: city,
      company: "",
      hasPreviousExperience: "no",
      name: "",
      phoneNumber: "",
    },
  });

  const formRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [lastStep, setLastStep] = useState(formSteps.length - 1);

  const loadingCtx = useContext(LoadingContext);
  const doctorsCtx = useContext(DoctorsContext);

  const handleButtonClick = (incrementor: number) => {
    setCurrentStep((prev) => prev + incrementor);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return <ContactDetailsForm form={form} />;
      case 1:
        return <PersonalDetailsForm form={form} />;
      case 2:
        return <ChiefComplaintForm form={form} />;
      case 3:
        return <ExperienceForm form={form} />;
      default:
        return <></>;
    }
  };

  const handleSubmitForm: SubmitHandler<IFormResponse> = async (data) => {
    try {
      loadingCtx?.setLoading(true);
      const params = new URLSearchParams({ ...data });
      const res = await fetch("/api/doctors?" + params.toString(), {
        method: "GET",
      });
      const { doctors } = await res.json();
      doctorsCtx?.setDoctors(doctors);
    } catch (err) {
      alert(err);
      doctorsCtx?.setDoctors([]);
    } finally {
      loadingCtx?.setLoading(false);
    }
  };

  const { handleSubmit, watch } = form;

  useEffect(() => {
    if (!isNaN(parseInt(watch("age")))) {
      if (parseInt(watch("age")) < 40) setLastStep(2);
      else setLastStep(3);
    }
  }, [watch("age")]);

  return (
    <div
      id="form"
      className="flex flex-col items-center bg-form-bg px-4 py-12 gap-y-6 min-h-[65vh] sm:px-6 lg:me-0 lg:py-8 lg:pe-0 lg:ps-8 xl:py-8"
    >
      <p className="text-2xl text-gray-300 font-semibold">Consultation Form</p>
      <form
        ref={formRef}
        data-multi-step
        className="overflow-hidden relative w-1/3"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        {formSteps.map((step, index) => (
          <div
            key={step}
            className={`bg-step-bg border-2 border-gray-300 rounded p-4 min-w-[20rem] mx-auto animate-[fade_250ms_ease-in-out_forwards] flex flex-col gap-y-4 ${
              index === currentStep
                ? "!animate-[slide_250ms_125ms_ease-in-out_both]"
                : "hidden"
            }`}
          >
            <p className="text-step-title text-xl font-semibold text-center">
              {step}
            </p>
            {renderForm()}
            <div className="flex items-center justify-between mt-6">
              <button
                className={`text-white font-semibold text-sm rounded-md bg-primary px-4 py-2 ${
                  currentStep === 0 && "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={currentStep === 0}
                onClick={(e) => {
                  e.preventDefault();
                  handleButtonClick(-1);
                }}
              >
                Previous
              </button>
              {currentStep === lastStep ? (
                <button
                  className="text-white font-semibold text-sm rounded-md bg-primary px-4 py-2"
                  type="submit"
                >
                  Submit
                </button>
              ) : (
                <button
                  className="text-white font-semibold text-sm rounded-md bg-primary px-4 py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleButtonClick(1);
                  }}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default ConsultationForm;
