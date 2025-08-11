import { NextResponse } from 'next/server';
import clientPromise from "@/app/lib/mongodb"

const DB_NAME = 'Review';
const COLLECTION_NAME = 'Review';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db(DB_NAME);
        const reviews = await db.collection(COLLECTION_NAME).find().sort({ _id: -1 }).toArray();
        return NextResponse.json(reviews);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ message: 'Failed to fetch reviews.' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const client = await clientPromise;
        const db = client.db(DB_NAME);
        const data = await request.json();

        const existingReview = await db.collection(COLLECTION_NAME).findOne({ email: data.email });
        if (existingReview) {
            return NextResponse.json({ message: 'This email has already submitted a review.' }, { status: 409 });
        }

        await db.collection(COLLECTION_NAME).insertOne({ ...data, createdAt: new Date() });
        
        return NextResponse.json({ message: 'Review submitted successfully!' }, { status: 201 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ message: 'Failed to submit review.' }, { status: 500 });
    }
}
