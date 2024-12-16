import cls from "./login.module.scss"
import {AuthForm} from "@/react/shared/ui/authForm/ui/AuthForm";

export const Login = () => {
    return (
        <section className={cls.ContainerLogin}>
            <div className={cls.ContainerTitle}>
                <h2>Добро пожаловать</h2>
                <p>Войдите в свою учетную запись team24</p>
            </div>
            <AuthForm buttonChildren={"Начать тэстирование"}/>
        </section>
    )
}