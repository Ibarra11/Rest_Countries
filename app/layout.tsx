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
      <body className=" bg-white dark:bg-gray-3 min-h-screen ">
        <header className=" h-20 dark:bg-gray-2 xl:mb-12"></header>
        <main className="max-w-7xl mx-auto">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
