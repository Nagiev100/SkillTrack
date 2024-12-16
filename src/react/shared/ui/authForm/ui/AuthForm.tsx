import {Input} from "@/react/shared/ui/input/ui/Input";
import {Button, ButtonSize, ButtonTheme} from "@/react/shared/ui/button/ui/Button";
import cls from "./authForm.module.scss"

interface AuthFormProps {
    buttonChildren: string;
}

export const AuthForm = (props: AuthFormProps) => {
    const {buttonChildren} = props;

    return (
        <section className={cls.ContainerLogout}>
            <Input placeholder={"Фамилия Имя"} title={"Фамилия Имя"} type={"text"}/>
            <Input placeholder={"Пороль"} title={"Пароль"} type={"password"}/>
            <Button children={buttonChildren} theme={ButtonTheme.DEFAULT_THEME} size={ButtonSize.BIG}/>
        </section>
    )

}