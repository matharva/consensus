import React from "react";
import { ExtraOptions, OptionFeatureProps } from "../types/types";

const OptionFeature = ({
  extraOptions,
  setExtraOptions,
}: OptionFeatureProps) => {
  return (
    <>
      <div className="mt-4 ml-2 text-gray-500 font-semibold">
        Extra Poll Options
      </div>
      <div
        className="md:inline-block cursor-pointer enableMultipleVotes"
        onClick={() =>
          setExtraOptions((prev: ExtraOptions) => {
            return { ...prev, enableMultipleVotes: !prev.enableMultipleVotes };
          })
        }
      >
        <div className="m-2 rounded shadow-md p-4 flex items-center md:justify-center">
          <input
            name="enableMultipleVotes"
            type="checkbox"
            className="h-5 w-5 md:h-4 md:w-4"
            checked={extraOptions["enableMultipleVotes"]}
          />
          <div className="flex flex-col ml-4">
            <div className="text-gray-600 font-bold">Allow Multiple Votes</div>
            <div className="text-sm text-gray-400 font-medium md:hidden">
              Allow multiple votes on one poll from a single visitor.
            </div>
          </div>
        </div>
      </div>

      <div
        className="md:inline-block cursor-pointer mt-4 md:mt-0"
        onClick={() =>
          setExtraOptions((prev: ExtraOptions) => {
            return { ...prev, enableLogin: !prev.enableLogin };
          })
        }
      >
        <div className="m-2 rounded shadow-md p-4 flex items-center md:justify-center">
          <input
            type="checkbox"
            className="h-5 w-5 md:h-4 md:w-4"
            checked={extraOptions["enableLogin"]}
          />
          <div className="flex flex-col ml-4">
            <div className="text-gray-600 font-bold">Login to Vote</div>
            <div className="text-sm text-gray-400 font-medium md:hidden">
              Added security to stop duplicate votes being cast.
            </div>
          </div>
        </div>
      </div>
      <div
        className="md:inline-block cursor-pointer mt-4 md:mt-0"
        onClick={() =>
          setExtraOptions((prev: ExtraOptions) => {
            return { ...prev, enableComments: !prev.enableComments };
          })
        }
      >
        <div className="m-2 rounded shadow-md p-4 flex items-center md:justify-center">
          <input
            type="checkbox"
            className="h-4 w-4 md:h-4 md:w-4"
            checked={extraOptions["enableComments"]}
          />
          <div className="flex flex-col ml-4">
            <div className="text-gray-600 font-bold">Add Comments</div>
            <div className="text-sm text-gray-400 font-medium md:hidden">
              Add comments functionality to your poll.
            </div>
          </div>
        </div>
      </div>
      <div
        className="md:inline-block cursor-pointer mt-4 md:mt-0"
        onClick={() =>
          setExtraOptions((prev: ExtraOptions) => {
            return { ...prev, enableCaptcha: !prev.enableCaptcha };
          })
        }
      >
        <div className="m-2 rounded shadow-md p-4 flex items-center md:justify-center">
          <input
            type="checkbox"
            className="h-7 w-7 md:h-4 md:w-4"
            checked={extraOptions["enableCaptcha"]}
          />
          <div className="flex flex-col ml-4">
            <div className="text-gray-600 font-bold">Enable Captcha</div>
            <div className="text-sm text-gray-400 font-medium md:hidden">
              Requires users solve a captcha, which is a short test before
              voting.
            </div>
          </div>
        </div>
      </div>
      <div
        className="md:inline-block cursor-pointer mt-4 md:mt-0"
        onClick={() =>
          setExtraOptions((prev: ExtraOptions) => {
            return { ...prev, enableEndDate: !prev.enableEndDate };
          })
        }
      >
        <div className="m-2 rounded shadow-md p-4 flex items-center md:justify-center">
          <input
            type="checkbox"
            className="h-7 w-7 md:h-4 md:w-4"
            checked={extraOptions["enableEndDate"]}
          />
          <div className="flex flex-col ml-4">
            <div className="text-gray-600 font-bold">Set End Date</div>
            <div className="text-sm text-gray-400 font-medium md:hidden">
              Allows poll creators to to set an automatic end date for their
              poll.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OptionFeature;
