"use server";

import { User, Product } from "./models";
import { connectToDatabase } from "./utils";
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache';
import bcrypt from 'bcrypt';

export const addUser = async (formData) => {
    const varsalt = parseInt(process.env.SALT);
    const { username, email, password, phone, adress, img, isAdmin, isActive } = Object.fromEntries(formData);
    try {
        connectToDatabase();
        const salt = await bcrypt.genSalt(varsalt);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User ({
            username,
            email,
            password: hashedPassword,
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

export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size, img, cat } = Object.fromEntries(formData);
    try {
        connectToDatabase();
       
        const newproduct = new Product ({
            title,
            desc,
            price,
            stock,
            color,
            size,
            img,
            cat
        });
        
        await newproduct.save();

    }catch(err) {
        console.log(err);
        throw new Error ("Epic fail");
    }
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products");
}