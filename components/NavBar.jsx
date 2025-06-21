"use client";
import { notFound } from "next/navigation";
import Navigation from "./Navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function NavBar() {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  if (!user) {
    return notFound();
  }

  return (
    <>
      <div className="max-w-8xl mx-auto shadow-md p-4 mb-4">
        <Navigation />
      </div>
    </>
  );
}
