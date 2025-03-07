import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Credit from './components/Credit';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Renz Tolentino",
  description: "Personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen">
          {/* Left Navigation */}
          <div className="lg:mx-24 2lg:mx-0">
            <Navbar />
          </div>
          {/* Left Nav Spacer */}
          <div className="hidden lg:block xs:w-80 lg:w-12 xl:w-80 flex-shrink-0" />
          {/* Main Content */}
          <main className="flex-1 max-w-[800px] w-full mx-auto px-4 py-16 lg:border-l lg:border-r lg:border-light-gray-2">
            {children}
            <Credit />
          </main>
          {/* Right Sidebar Spacer */}
          <div className="hidden lg:block xs:w-80 lg:w-12 xl:w-80 flex-shrink-0" />
          {/* Chat Component */}
          <Chat />
        </div>
      </body>
    </html>
  );
}