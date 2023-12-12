import { ReactNode } from "react";
import { Navbar } from "./_components/navbar";

function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
    </div>
  );
}
export default MarketingLayout;
