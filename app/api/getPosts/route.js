import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Post from "@/models/post";

export async function POST(req) {
    try {
        const { name } = await req.json();
        await connectMongoDB();
        posts = await Post.find({ name: name })
        return NextResponse.json(JSON.stringify(posts), { status: 201 });

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "An error occured while retrieving the posts." },
            { status: 500 }
        );
    }
}