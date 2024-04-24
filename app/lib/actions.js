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
export const updateUser = async (formData) => {
    const varsalt = parseInt(process.env.SALT);
    const { id, username, email, password, phone, adress, img, isAdmin, isActive } = Object.fromEntries(formData);
    try {
        connectToDatabase();
        
        const updateFields = {
            username,
            password,
            email,
            phone,
            adress,
            img,
            isAdmin,
            isActive
        }
        Object.keys(updateFields).forEach((key)=> (updateFields[key] === "" || undefined) && delete updateFields[key]);
        if (updateFields.password) {
            const salt = await bcrypt.genSalt(varsalt);
            updateFields.password = await bcrypt.hash(updateFields.password, salt);
        }
        await User.findByIdAndUpdate(id, updateFields)
        console.log(updateFields);
        
        }catch(err) {
            console.log(err);
            throw new Error ("Epic fail update user");
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

export const deleteUser= async (formData) => {
    const { id } = Object.fromEntries(formData);
    try {
        connectToDatabase();
        await Product.findByIdAndDelete(id);
    }
    catch(err) {
        console.log(err);
        throw new Error ("Epic fail user deletion");
    }
    revalidatePath("/dashboard/users")
}

export const deleteProduct= async (formData) => {
    const { id } = Object.fromEntries(formData);
    try {
        connectToDatabase();
        await Product.findByIdAndDelete(id);
    }
    catch(err) {
        console.log(err);
        throw new Error ("Epic fail product deletion");
    }
    revalidatePath("/dashboard/products")
}