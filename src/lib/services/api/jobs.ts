import { Job } from "@/types/job";

export const getJobs = async () => {
  const res = await fetch("https://jobify-back-end.onrender.com/jobs", {
    method: "GET",
  });
  const data: Job[] = await res.json();
  return data;
};

export const getJobById = async (id: string) => {
  // Get toke of the user issued by clerk
  const token = await window.Clerk.session.getToken();

  const res = await fetch(`https://jobify-back-end.onrender.com/jobs/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data: Job = await res.json();
  return data;
};

export const createJob = async ({
  title,
  description,
  type,
  location,
  questions,
}: {
  title: string;
  description: string;
  type: string;
  location: string;
  questions: string[];
}) => {
  const token = await window.Clerk.session.getToken();

  // We pass the token to backend so clerk middleware verify if its a user or not

  await fetch("https://jobify-back-end.onrender.com/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      description,
      type,
      location,
      questions,
    }),
  });
};
