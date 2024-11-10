import Layout from "../components/Layout";

import { Noto_Sans_Georgian } from "next/font/google";

//👇 Configure the object for our second font
const robotoMono = Noto_Sans_Georgian({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-georgia",
});

export default function Home() {
  return (
   
      <Layout></Layout>
   
  );
}
