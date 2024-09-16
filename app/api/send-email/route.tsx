import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_LEY)

export async function POST(){
    await resend.emails.send({
        from:'...',
        to:"thanujdevil@gmail.com",
        subject:"...",
        react: <WelcomeTemplate name="Thanuj"/>

    })

    return NextResponse.json({});
}