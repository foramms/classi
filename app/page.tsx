import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    console.log("found")
    redirect("/dashboard")
  }

  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />

    </>
  )
}
