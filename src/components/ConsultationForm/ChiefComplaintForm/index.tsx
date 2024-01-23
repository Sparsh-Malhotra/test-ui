import { IFormProps } from "@/models/formResponse";

const ChiefComplaintForm = ({ form }: IFormProps) => {
  const { setValue, watch } = form;
  return (
    <>
      <div>
        <label
          htmlFor="complaint"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Chief Complaints
        </label>
        <div className="flex">
          <textarea
            id="complaint"
            className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Chief Complaints"
            onChange={(e) => setValue("chiefComplaints", e.target.value)}
            value={watch("chiefComplaints")}
          />
        </div>
      </div>
    </>
  );
};

export default ChiefComplaintForm;
