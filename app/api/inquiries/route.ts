import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const inquiry = await Inquiry.create({
      parentName: body.parentName,
      phone: body.phone,
      email: body.email || "",
      childName: body.childName,
      childAge: body.childAge,
      gender: body.gender,
      concernType: body.concernType,
      preferredDate: body.preferredDate || "",
      message: body.message || "",
    });

    return NextResponse.json({ success: true, inquiry }, { status: 201 });
  } catch (error) {
    console.error("Inquiry Error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to save inquiry" },
      { status: 500 }
    );
  }
}