import { db } from "@/server/db";
import { z } from "zod";
export async function POST(request: Request) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(10).max(100),
  });
  try {
    const { email, password } = schema.parse(await request.json());
    const dbResp = await db.user.create({
      data: {
        email: email,
      },
    });
  } catch (e) {
    console.log(e);
    return Response.json(
      {
        error: "invalid request",
      },
      {
        status: 400,
        statusText: "Bad Request",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
