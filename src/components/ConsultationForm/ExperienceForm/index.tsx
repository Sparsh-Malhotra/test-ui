import { IFormProps } from "@/models/formResponse";

const ExperienceForm = ({ form }: IFormProps) => {
  const { setValue } = form;
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm font-medium text-gray-900 dark:text-white">
        Do you have any previous experience with physiotherapy ?
      </p>
      <ul className="items-center w-fit text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-fit border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center px-3">
            <input
              id="horizontal-list-radio-yes"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              onChange={(e) =>
                e.target.checked && setValue("hasPreviousExperience", "yes")
              }
            />
            <label
              htmlFor="horizontal-list-radio-yes"
              className="w-fit py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Yes
            </label>
          </div>
        </li>
        <li className="w-fit border-b border-gray-200 sm:border-b-0 dark:border-gray-600">
          <div className="flex items-center px-3">
            <input
              id="horizontal-list-radio-no"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              onChange={(e) =>
                e.target.checked && setValue("hasPreviousExperience", "no")
              }
            />
            <label
              htmlFor="horizontal-list-radio-no"
              className="w-fit py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              No
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ExperienceForm;
