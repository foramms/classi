import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Post from "@/models/post";

export async function POST(req) {
    try {
        const { name, review } = await req.json();
        await connectMongoDB();
        await Post.create({ name: name, post: review });
        return NextResponse.json({ message: "Post created." }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "An error occured while submitting the post." },
            { status: 500 }
        );
    }
}