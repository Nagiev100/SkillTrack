import {Input} from "@/react/shared/ui/input/ui/Input";
import {Button, ButtonSize, ButtonTheme} from "@/react/shared/ui/button/ui/Button";
import cls from "./login.module.scss"

export const Login = () => {
    return (
        <section className={cls.ContainerLogin}>
            <Input placeholder={"Фамилия Имя"} title={"Фамилия Имя"} type={"text"}/>
            <Input placeholder={"Пороль"} title={"Пароль"} type={"password"}/>
            <Button children={"Войти"} theme={ButtonTheme.DEFAULT_THEME} size={ButtonSize.BIG}/>
        </section>
    )
}