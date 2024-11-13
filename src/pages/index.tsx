import Layout from "../components/Layout";

import { DM_Sans } from "next/font/google";

const dmsans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmsans",
  weight: ["300"],
  style: ["normal"],
});

export default function Home() {
  return (
    <div className="font-dmsans">
      <Layout></Layout>
    </div>
  );
}
