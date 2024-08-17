import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {

  const user = await prisma.user.findUnique({
    where:{
      id:parseInt(id)
    }
  })

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  const user = await prisma.user.findUnique({
    where:{
      id:parseInt(id)
    }
  })

  if (!validation.success) {
    return NextResponse.json( validation.error.errors , { status: 400 });
  }
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }


  const updatedUser = await prisma.user.update({
    where:{
      id:parseInt(id)
    },
    data:{
      name:body.name,
      email:body.email
    }
  })

  return NextResponse.json(updatedUser, {status:201});
}


export function DELETE(request:NextRequest, {params:{id}}:Props){
  if(id>10){
    return NextResponse.json({error:"User not found"}, {status:404})
  }
  return NextResponse.json({message:"Deleted"})
}