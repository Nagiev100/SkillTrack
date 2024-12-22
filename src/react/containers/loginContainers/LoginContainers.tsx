"use client"
import cls from "./loginContainer.module.scss"
import {Login} from "@/react/components/login/ui/Login";
import {FormWrapper} from "@/react/shared/ui/formWrapper/ui/FormWrapper";

export function LoginContainer() {
    return(
        <section className={cls.LoginContainer}>
            <Login/>
        </section>
    )
}