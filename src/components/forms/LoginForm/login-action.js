"use server"
import { z } from "zod"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { login } from "@/lib/dal/login"

const loginSchema = z.object({
    username: z.string().min(1, "Indtast et brugernavn."),
    password: z.string().min(4, "Password skal være mindst 4 karakterer.")
})

export async function loginUser(prevState, formData) {

    const cookieStore = await cookies()
    const username = formData.get("username")
    const password = formData.get("password")


    if (username === prevState.values.username && password === prevState.values.password) {
        return prevState // no change
    }

    const result = loginSchema.safeParse({ username, password })

    if (!result.success) {
        console.log(z.flattenError(result.error).fieldErrors)
        return {
            values: { username, password },
            errors: z.flattenError(result.error).fieldErrors
        }
    }

    const response = await login(username, password)

    if (!response.success) {
        return {
            values: { username, password },
            errors: { form: [response.message] }
        }
    }

    console.log(response.data)

    cookieStore.set("token", response.data.token)
    cookieStore.set("username", username)
    cookieStore.set("role", response.data.role)

    return {
        success: true,
        user: response.data,
        token: response.data.token,
        values: { username, password }
    }

}