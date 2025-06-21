"use client";
import Navigation from "./Navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function NavBar() {
  const { getUser } = useKindeBrowserClient();
  let user = null;
  try {
    user = getUser();
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
  return (
    <>
      <div className="max-w-8xl mx-auto shadow-md p-4 mb-4">
        <Navigation />
      </div>
    </>
  );
}
