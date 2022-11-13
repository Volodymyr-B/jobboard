import { JobContext } from "../context/jobContext";
import { useContext } from "react";

export const useJobContext = () => useContext(JobContext);
