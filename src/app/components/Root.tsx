import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function Root() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
