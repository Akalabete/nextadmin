import { User } from "./models";
import { connectToDatabase } from "./utils";
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache'
export const addUser = async (formData) => {
    "use server";
    const { username, email, password, phone, adress, img, isAdmin, isActive } = Object.fromEntries(formData);
    try {
        connectToDatabase();
        const newUser = new User ({
            username,
            email,
            password,
            phone,
            adress,
            img,
            isAdmin,
            isActive
        });
        await newUser.save();

    }catch(err) {
        console.log(err);
        throw new Error ("Epic fail");
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users");
}