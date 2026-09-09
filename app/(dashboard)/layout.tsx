import { auth } from "@clerk/nextjs/server";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await auth.protect();
  return <div>{children}</div>;
}
