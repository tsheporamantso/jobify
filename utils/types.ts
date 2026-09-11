export const JOB_STATUSES = ["pending", "interview", "declined"] as const;
export type JobStatus = (typeof JOB_STATUSES)[number];

export const JOB_MODES = ["full-time", "part-time", "remote"] as const;
export type JobMode = (typeof JOB_MODES)[number];

export type JobType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  position: string;
  company: string;
  location: string;
  status: JobStatus;
  mode: JobMode;
};