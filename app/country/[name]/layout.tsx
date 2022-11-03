import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="dark:text-white">
      <button className="mb-20">Back</button>
      {children}
    </section>
  );
}
