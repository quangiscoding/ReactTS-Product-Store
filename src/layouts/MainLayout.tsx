import type { ReactNode } from "react";
import Navbar from "../components/navbar/Navbar";

type MainLayoutProps = {
  children: ReactNode;
  showSearch?: boolean;
};

const MainLayout = ({ children, showSearch = true }: MainLayoutProps) => (
  <div className="w-full min-h-screen bg-white dark:bg-gray-600">
    <Navbar showSearch={showSearch} />
    <main className="max-w-360 py-10 mx-auto">{children}</main>
  </div>
);

export default MainLayout;
