import type { ReactNode } from "react";
import { auth } from "@clerk/nextjs/server";

export default async function Layout({ children }: { children: ReactNode }) {
  await auth.protect();
  return <div>{children}</div>;
}
