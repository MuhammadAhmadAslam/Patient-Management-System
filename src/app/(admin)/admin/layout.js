import { AdminLayout } from "@/Components/Admin/AdminLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] })

const metadata = {
  title: "Patient Management System",
  description: "Admin panel for managing patients, doctors, and appointments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminLayout>{children}</AdminLayout>
      </body>
    </html>
  );
}

