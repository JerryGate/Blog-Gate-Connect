"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/about", label: "About" },
  ];
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center space-x-10">
        <div>
          <Link href="/" className="hidden md:inline-block">
            <div className="flex items-center justify-center ">
              <h1 className="text-3xl font-bold">
                Blog
                <span className="text-blue-500">Gate</span>
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`text-md md:text-lg hover:text-gray-800 transition-colors  ${
                pathname === link.href
                  ? "border-b-2 border-blue-600 text-blue-500 "
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {user ? (
        <div className="hidden md:flex items-center gap-5">
          <span className="text-gray-700">{user.given_name}</span>
          <LogoutLink className="bg-blue-500 text-white p-2 rounded transition-colors duration-200 hover:bg-blue-600">
            Logout
          </LogoutLink>
        </div>
      ) : (
        <div className="hidden md:flex items-center justify-center gap-5">
          <RegisterLink className="bg-blue-500 text-white p-2 rounded transition-colors duration-200 hover:bg-blue-600">
            Register
          </RegisterLink>
          <LoginLink className="bg-blue-500 text-white p-2 rounded transition-colors duration-200 hover:bg-blue-600">
            Login
          </LoginLink>
        </div>
      )}

      <button
        className="md:hidden p-2 text-gray-700 hover:text-blue-500 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transform transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-16 right-0 z-30 w-full bg-white shadow-md mb-10 rounded-lg p-4`}
      >
        <div className="flex flex-col items-start">
          <Link
            href="/"
            className={`py-2 px-4 w-full text-lg text-gray-500 text-left hover:text-gray-700 transition-colors ${
              pathname === "/" ? "text-blue-500 font-semibold" : "text-gray-700"
            } hover:bg-blue-50 transition-colors duration-200`}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`py-2 px-4 w-full text-left ${
              pathname.startsWith("/dashboard")
                ? "text-blue-500 font-semibold"
                : "text-gray-700"
            } hover:bg-blue-50 transition-colors duration-200`}
          >
            Dashboard
          </Link>
          {user ? (
            <>
              <div className="relative rounded-full">
                <Image
                  src={user.picture}
                  alt="Image of blog user"
                  fill
                  className="object-cover"
                />
              </div>
              <LogoutLink className="bg-blue-500 text-white p-2 rounded transition-colors duration-200 hover:bg-blue-600 w-full text-center mt-2">
                Logout
              </LogoutLink>
            </>
          ) : (
            <>
              <RegisterLink
                className="bg-blue-500 text-white p-2 rounded transition-colors duration-
200 hover:bg-blue-600 w-full text-center mb-2"
              >
                Register
              </RegisterLink>
              <LoginLink className="bg-blue-500 text-white p-2 rounded transition-colors duration-200 hover:bg-blue-600 w-full text-center">
                Login
              </LoginLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
