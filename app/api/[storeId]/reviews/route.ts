import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server"

import prismadb from "@/lib/prismadb";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};


export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders })
}


export async function POST(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        // const { userId } = auth()
        const body = await req.json()

        const { reviewerName, rating, comment, productId } = body;

        // if (!userId) {
        //   return new NextResponse("Unauthenticated", { status: 403 });
        // }

        if (!reviewerName) {
            return new NextResponse('Name is required', { status: 400 });
        }

        if (!rating) {
            return new NextResponse('Rating is required', { status: 400 });
        }

        if (!comment) {
            return new NextResponse('Comment is required', { status: 400 });
        }

        if (!productId) {
            return new NextResponse('productId is required', { status: 400 });
        }

        if (!params.storeId) {
            return new NextResponse('Store ID is required', { status: 400 });
        }


        const reviews = await prismadb.review.create({
            data: {
                reviewerName,
                rating,
                comment,
                productId,
                storeId: params.storeId
            }
        });

        return NextResponse.json(reviews, {
            headers: corsHeaders
        })

    } catch (error) {
        console.log(`[REVIEWS_POST]`, error)
        return new NextResponse('Internal error', { status: 500 });
    }

}