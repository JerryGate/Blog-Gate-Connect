"use server"
import { createPostActionSchema } from "@/app/utils/schema"
import { updatePostActionSchema } from "@/app/utils/schema"
import { redirect } from "next/navigation";
import { prisma } from "./utils/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";

export async function createPost(state, formData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return redirect("/api/auth/register");
    }
    const valid = createPostActionSchema.safeParse({
        title: formData.get("title"),
        content: formData.get("content"),
        imageUrl: formData.get("imageUrl")
    });

    if (!valid.success) {
        return {
            errors: valid.error.flatten().fieldErrors,
        };
    }

    const { title, content, imageUrl } = valid.data;

    await prisma.blogPost.create({
        data: {
            title,
            content,
            imageUrl,
            authorId: user?.id,
            authorName: user?.given_name || "Nill",
            authorImage: user?.picture,
        }
    });

    revalidatePath("/")
    return redirect("/")
}

export async function updatePost(state, formData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) {
        return redirect("/api/auth/register");
    }
    const valid = updatePostActionSchema.safeParse({
        title: formData.get("title"),
        content: formData.get("content"),
        imageUrl: formData.get("imageUrl")
    });

    if (!valid.success) {
        return {
            errors: valid.error.flatten().fieldErrors,
        };
    }

    const { title, content, imageUrl } = valid.data;
    const formId = formData.get("postId");
    const postId = formId ? formId.toString() : null;

    await prisma.blogPost.update({
        where: {
            id: postId,
        },
        data: {
            title,
            content,
            imageUrl,
        }
    });

    revalidatePath("/")
    return redirect("/")
}

export async function deletePost(formData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) {
        return redirect("/api/auth/register");
    }
    const postId = formData.get("postId");
    await prisma.blogPost.delete({
        where: {
            id: postId,
        }
    });

    revalidatePath("/dashboard/manage-blog-posts");
}