import type { ReactNode } from "react";
import { auth } from "@clerk/nextjs/server";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default async function Layout({ children }: { children: ReactNode }) {
  await auth.protect();
  return (
    <main className="grid lg:grid-cols-5">
      {/* first col hide on small screen */}
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen lg:sticky lg:top-0">
        <Sidebar />
      </div>
      {/* second col hide dropdown on big screen */}
      <div className="lg:col-span-4">
        <Navbar />
        <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </div>
    </main>
  );
}
