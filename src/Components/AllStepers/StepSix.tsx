"use client";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

interface OptionType {
  id: number;
  label: string;
}

const StepSix: React.FC = () => {
  const { control, register, watch } = useFormContext();
  const selectedOption = watch("stepOneOption");

  const options: OptionType[] = [
    {
      id: 1,
      label: "In the previous three years I earned income from employment or similar sources exceeding €30,000.",
    },
    {
      id: 2,
      label: "In the previous three years I did not earn income from employment or similar sources exceeding €30,000.",
    },
    {
      id: 3,
      label: "I am waiting for confirmation of my total income in the previous three years.”",
    },
    {
      id: 4,
      label: "This question is not applicable to me.",
    },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Options */}
      <Controller
        name="stepOneOption"
        control={control}
        render={({ field }) => (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {options.map((option) => (
              <div
                key={option.id}
                onClick={() => field.onChange(option.id)}
                className={`cursor-pointer select-none border rounded-xl p-5 min-h-[120px] flex gap-3 shadow-sm transition 
                  ${
                    field.value === option.id
                        ? "border-[#004d3f] bg-[#004d3f12] "
                      : "border-gray-200 hover:border-[#004d3f] bg-white"
                  }`}
              >
                <div>
                  <input
                    type="checkbox"
                    checked={field.value === option.id}
                    readOnly
                    className="mt-1 h-5 w-5 accent-[#004d3f]"
                  />
                  <p className="text-sm text-gray-800 leading-6">{option.label}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      />

      {/* Divider */}
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-full bg-gray-300"></div>
        <span className="text-gray-600">Or</span>
        <div className="h-px w-full bg-gray-300"></div>
      </div>

      {/* Notes */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <label className="block font-medium text-gray-700 mb-2">Add your Notes</label>
        <textarea
          rows={4}
          placeholder="Write here..."
          className="w-full text-black focus:outline-none"
          {...register("stepOneNotes")}
        ></textarea>
      </div>
    </div>
  );
};

export default StepSix;