import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Nation</title>
      </head>
      <body>
        <main className=" bg-slate-600 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
