import { Inter } from "next/font/google";
import LeftSidebar from "@/components/main/LeftSidebar";
import MiddleContent from "@/components/main/MiddleContent";
import RightSidebar from "@/components/main/RightSidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="max-w-[1880px] mx-auto pt-[40px]">
      <div className="flex justify-between lg:gap-6">
        <LeftSidebar/>
        <MiddleContent/>
        <RightSidebar/>
      </div>
    </main>
  );
}
