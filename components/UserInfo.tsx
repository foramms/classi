"use client";

import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
    const { data: session } = useSession();
    const router = useRouter();

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
                <div>
                    Welcome <span className="font-regular">{session?.user?.name}!</span>
                </div>
                <button
                    onClick={() => router.replace("/post")}
                    className="bg-[#7699C8] text-white font-bold px-6 py-2 mt-3"
                >
                    Create a Post
                </button>
                <button
                    onClick={() => signOut()}
                    className="bg-[#7699C8] text-white font-bold px-6 py-2 mt-3"
                >
                    Log Out
                </button>
            </div>
        </div>
    );
}