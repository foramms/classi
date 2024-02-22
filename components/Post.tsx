"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Post() {
    const [review, setReview] = useState("");
    const { data: session } = useSession();
    const name = session?.user?.name
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!name || !review) {
            setError("All fields are necessary.");
            return;
        }
        try {
            const res = await fetch("api/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    review,
                }),

            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                // router.push("/dashboard");
            } else {
                console.log("Post failed.");
            }
        } catch (error) {
            console.log("Error during posting: ", error);
        }


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
                    <button
                        onClick={() => router.replace("/feed")}
                        className="bg-[#7699C8] text-white font-bold px-6 py-2 mt-3"
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    );
};


