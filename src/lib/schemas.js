//husk lib mappen skal være under src mappen!
import { z } from "zod";




// export const loginSchema = z.object({
//     email: z.email("Invalid email address."),
//     password: z.string().min(6, "Password must be at least 6 characters long.")
// });


export const emailSchema = z.object({
    email: z.email("Invalid email address.")
});



export const contactSchema = z.object({
    name: z.string().min(2, "Navn skal være mindst 2 tegn langt"),
    email: z.email("Ugyldig email adresse").min(1),
    subject: z.string().min(5, "Emne skal være mindst 5 tegn langt").optional(),
    message: z.string().min(10, "Besked skal være mindst 10 tegn langt"),

});




export const registerSchema = z.object({
    firstname: z.string().min(2, "Fornavn skal være mindst 2 tegn langt"),
    lastname: z.string().min(2, "Efternavn skal være mindst 2 tegn langt"),
    username: z.string().min(2, "Navn skal være mindst 2 tegn langt"),
    age: z.coerce.number().min(1, "Alder er påkrævet"),
    password: z.string().min(4, "Adgangskode skal være mindst 4 tegn langt"),
    confirmPassword: z.string().min(4, "Bekræft adgangskode skal være mindst 4 tegn langt"),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["custom"],
    message: "Adgangskoderne matcher ikke",
});

