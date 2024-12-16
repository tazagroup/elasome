import MiniDrawer from "@/components/ui/dashboardlayout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Admin Dashboard",
};

export default function AdminPage() {
  return (
    <MiniDrawer />
  );
}
