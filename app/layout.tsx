import "./globals.css";
import Header from "./components/header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Where In The World?</title>
      </head>
      <body className=" bg-white dark:bg-gray-3 min-h-screen">
        <Header />
        <main className="max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
