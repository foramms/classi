"use client"
import Post from "@/components/Post";
import { useSession } from "next-auth/react";

export default function Dashboard() {
    const { data: session } = useSession();
    return <Post />;
}