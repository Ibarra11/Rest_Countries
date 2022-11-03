import React from "react";
import Link from "next/link";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="dark:text-white">
      <Link href="/">Back</Link>
      {children}
    </section>
  );
}
