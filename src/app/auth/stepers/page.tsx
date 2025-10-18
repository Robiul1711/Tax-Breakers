"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

import StepOne from "@/Components/AllStepers/StepOne";
import StepTwo from "@/Components/AllStepers/StepTwo";
import StepThree from "@/Components/AllStepers/StepThree";
import StepFour from "@/Components/AllStepers/StepFour";
import StepFive from "@/Components/AllStepers/StepFive";
import StepSix from "@/Components/AllStepers/StepSix";
import StepSeven from "@/Components/AllStepers/StepSeven";
import StepEight from "@/Components/AllStepers/StepEight";
import StepNine from "@/Components/AllStepers/StepNine";
import StepTen from "@/Components/AllStepers/StepTen";

import stepsData from "@/Components/AllStepers/SetepsAllData/StepsAllData";
import { useRouter } from "next/navigation";

type FormValues = {
  // Add all the fields from all steps here
  name?: string;
  email?: string;
  age?: number;
  // ...etc
};

const Page = () => {
  const totalSteps = stepsData.length;
  const [currentStep, setCurrentStep] = useState<number>(1);
  const router = useRouter();

  // Initialize React Hook Form
  const methods = useForm<FormValues>({
    defaultValues: {},
    mode: "onChange",
  });

  const nextStep = () =>
    currentStep < totalSteps && setCurrentStep((prev) => prev + 1);
  const prevStep = () => currentStep > 1 && setCurrentStep((prev) => prev - 1);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (currentStep < totalSteps) {
      nextStep();
    } else {
      console.log("Final Form Data:", data);
      router.push('/auth/signup')
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      case 5:
        return <StepFive />;
      case 6:
        return <StepSix />;
      case 7:
        return <StepSeven />;
      case 8:
        return <StepEight />;
      case 9:
        return <StepNine />;
      case 10:
        return <StepTen />;
      default:
        return <StepOne />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-6 px-10 py-8 steper-bg">
      {/* Progress Bar */}
      <div className="flex gap-2 w-full max-w-5xl mx-auto">
        {stepsData.map((_, index) => (
          <div
            key={index}
            className={`h-3 flex-1 rounded-full transition-all duration-300 ${index < currentStep ? "bg-[#004D3F]" : "bg-gray-300"
              }`}
          ></div>
        ))}
      </div>

      {/* Step Title */}
      <div className="text-center space-y-3 mt-4">
        <h2 className="text-lg font-medium text-[#363B54]">
          Step {currentStep} of {totalSteps}
        </h2>
        <h1 className="text-3xl font-bold text-black">
          {stepsData[currentStep - 1].title}
        </h1>
        <p className="text-lg text-[#A7A7A7]">
          {stepsData[currentStep - 1].description}
        </p>
      </div>

      {/* Main Content */}
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full max-w-7xl mx-auto flex flex-col md:flex-row"
        >
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src={stepsData[currentStep - 1].image}
              alt="Step Illustration"
              width={450}
              height={480}
            />
          </div>

          {/* Form Step Content */}
          <div className="flex-1 w-full">
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-16 py-3 bg-[#004D3F] text-white rounded-2xl hover:bg-[#016A55] transition"
              >
                {currentStep < totalSteps ? "Continue" : "Finish"}
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Page;
