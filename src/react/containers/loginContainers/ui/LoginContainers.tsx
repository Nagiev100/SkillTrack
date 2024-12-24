"use client"
import cls from "./loginContainer.module.scss"
import {Login} from "@/react/components/login/ui/Login";

export function LoginContainer() {
    return(
        <section className={cls.LoginContainer}>
            <Login/>
        </section>
    )
}