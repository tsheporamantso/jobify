"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";
import { type CreateJobInput } from "@/components/CreateJobForm";
import { type JobType } from "./types";

async function authenticateAndRedirect(): Promise<string> {
  const { userId } = await auth();
  if (!userId) {
    redirect("/");
  }
  return userId;
}

export async function createJobAction(
  values: CreateJobInput,
): Promise<JobType | null> {
  const userId = await authenticateAndRedirect();
  try {
    const job = await prisma.job.create({
      data: {
        ...values,
        clerkId: userId,
      },
    });
    return job;
  } catch (error) {
    console.error(error);
    return null;
  }
}
