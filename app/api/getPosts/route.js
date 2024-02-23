import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Post from "@/models/post";

export async function POST(req) {
    try {
        const { name } = await req.json();
        console.log(name)
        await connectMongoDB();
        const ps = await Post.find({})
        // console.log(ps[0]["post"])
        console.log(ps)
        console.log(ps.post)
        return NextResponse.json(JSON.stringify(ps), { status: 201 });

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "An error occured while retrieving the posts." },
            { status: 500 }
        );
    }
}

