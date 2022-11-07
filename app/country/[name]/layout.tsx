import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="dark:text-white">
      <Link className="flex items-center gap-2 mb-20 " href="/">
        <span>
          <ArrowLeft size={20} />
        </span>
        Back
      </Link>
      {children}
    </section>
  );
}
