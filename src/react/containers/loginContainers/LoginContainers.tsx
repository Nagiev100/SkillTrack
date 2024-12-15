"use client"
import cls from "./loginContainer.module.scss"
import {Login} from "@/react/components/login/ui/Login";
import {Form} from "@/react/shared/ui/form/Form";

export function LoginContainer() {
    return(
        <section className={cls.LoginContainer}>
            <Form>
                <Login/>
            </Form>
        </section>
    )
}