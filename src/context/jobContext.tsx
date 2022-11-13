import React, {
  createContext,
  useState,
  FC,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import axios from "axios";

import { JobData } from "../models/jobData";

interface ProviderProps {
  children: ReactNode;
}
interface JobContextData {
  job: JobData | null;
  jobList: JobData[] | [];
  setJobHandler: (value: JobData) => void;
}

const initValue: JobContextData = {
  job: null,
  jobList: [],
  setJobHandler: () => {},
};

export const JobContext = createContext<JobContextData>(initValue);

export const JobProvider: FC<ProviderProps> = ({ children }) => {
  const [jobList, setJobList] = useState<JobData[] | []>([]);
  const [job, setJobs] = useState<JobData | null>(null);

  const setJobHandler = useCallback((value: JobData) => {
    setJobs(value);
  }, []);

  useEffect(() => {
    let baseURL = "https://api.json-generator.com/templates/ZM1r0eic3XEy/data";
    let token = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
    axios
      .get<JobData[]>(baseURL, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => {
        setJobList(data.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const value = {
    job,
    jobList,
    setJobHandler,
  };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};
