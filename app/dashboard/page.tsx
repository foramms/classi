"use client"
import UserInfo from "@/components/UserInfo";
import { useSession } from "next-auth/react";

export default function Dashboard() {
    const { data: session } = useSession();
    return <UserInfo />;
}




