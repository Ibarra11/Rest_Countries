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
      <body className="bg-slate-600 min-h-screen">
        <header></header>
        <main className="">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
