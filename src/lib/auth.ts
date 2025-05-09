'use server'
import bcrypt from "bcryptjs";
import { prisma } from "../app/lib/prisma";

export const signUp = async (email: string, password: string, name: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return { user: newUser };
  } catch (error) {
    console.log("Prisma error ",error);
    return { error: "Error creating user" };
  }
};

export const signIn = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return { error: "User not found" };
  }

  // Compare the hashed password with the provided password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return { error: "Invalid credentials" };
  }

  // Return a successful response
  return { user };
};
