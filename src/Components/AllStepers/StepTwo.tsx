"use client";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

interface OptionType {
  id: number;
  label: string;
}

const StepTwo: React.FC = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const options: OptionType[] = [
    {
      id: 1,
      label: "I hold a higher education degree (Bachelor/Master) or an equivalent highly qualified professional qualification.",
    },
    {
      id: 2,
      label: "I do not hold a higher education degree or an equivalent highly qualified professional qualification.",
    },
    {
      id: 3,
      label: "My educational/professional qualification status is pending confirmation.",
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
        name="stepTwoOption"
        control={control}
        rules={{ required: "Please select an option" }}
        render={({ field }) => (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {options.map((option) => (
              <div
                key={option.id}
                onClick={() => field.onChange(option.id)}
                className={`cursor-pointer select-none border rounded-xl p-5 min-h-[120px] flex gap-3 shadow-sm transition 
                  ${
                    field.value === option.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-black/30 bg-white"
                  }`}
              >
                <div>
                  <input
                    type="checkbox"
                    checked={field.value === option.id}
                    readOnly
                    className="mt-1 h-5 w-5"
                  />
                  <p className="text-sm text-gray-800 leading-6">{option.label}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      />
      {errors.stepTwoOption?.message && (
        <p className="text-red-500 text-sm mt-1">{errors.stepTwoOption.message as string}</p>
      )}

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
          className="w-full text-black focus:outline-none border p-2 rounded"
          {...register("stepTwoNotes", {
            required: "Please add your notes",
            minLength: { value: 5, message: "Notes must be at least 5 characters" },
          })}
        ></textarea>
        {errors.stepTwoNotes?.message && (
          <p className="text-red-500 text-sm mt-1">{errors.stepTwoNotes.message as string}</p>
        )}
      </div>
    </div>
  );
};

export default StepTwo;
