import { useState } from "react";
import type { Career } from "../types";

export const useCareers = () => {
  const [careers] = useState<Career[]>([
    {
      id: "1",
      title: "Lower Primary Class Teacher",
      department: "Teaching",
      location: "Main Campus, Kochi",
      jobType: "Full-Time",
      applyBy: "15th Aug 2025",
    },
    {
      id: "2",
      title: "Front Desk Administrator",
      department: "Administration",
      location: "Main Campus, Kochi",
      jobType: "Full-Time",
      applyBy: "18th Aug 2025",
    },
    {
      id: "3",
      title: "High School Science Teacher",
      department: "Teaching",
      location: "Main Campus, Kochi",
      jobType: "Full-Time",
      applyBy: "20th Aug 2025",
    },
    {
      id: "4",
      title: "Lower Primary Class Teacher",
      department: "Teaching",
      location: "Main Campus, Kochi",
      jobType: "Full-Time",
      applyBy: "15th Aug 2025",
    },
    {
      id: "5",
      title: "Front Desk Administrator",
      department: "Administration",
      location: "Main Campus, Kochi",
      jobType: "Full-Time",
      applyBy: "18th Aug 2025",
    },
    {
      id: "6",
      title: "High School Science Teacher",
      department: "Teaching",
      location: "Main Campus, Kochi",
      jobType: "Full-Time",
      applyBy: "20th Aug 2025",
    },
  ]);

  return { careers };
};
