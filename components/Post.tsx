"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Post() {
    const [review, setReview] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
    }


    return (
        <div className="w-full h-[100vh] flex items-center justify-center p-6">
            <div className="w-full shadow-lg p-1 rounded-lg border-t-4 border-[#7699C8]">
                <h1 className="text-xl font-bold my-4">Review professors and classes</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        onChange={(e) => setReview(e.target.value)}
                        type="text"
                        placeholder="Write a Review"
                    />
                </form>
                <button
                    onClick={() => router.replace("/dashboard")}
                    className="bg-[#7699C8] text-white font-bold px-6 py-2 mt-3"
                >Submit

                </button>
            </div>
        </div>
    );
};


