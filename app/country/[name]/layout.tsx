import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="text-gray-700 dark:text-gray-300 mt-12">
      <Link
        aria-label="go back"
        className="flex items-center gap-2 mb-20 "
        href="/"
      >
        <span>
          <ArrowLeft size={20} />
        </span>
        Back
      </Link>
      {children}
    </section>
  );
}
