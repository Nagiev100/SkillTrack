import {Input} from "@/react/shared/ui/input/ui/Input";
import {Button, ButtonSize, ButtonTheme} from "@/react/shared/ui/button/ui/Button";
import cls from "./authForm.module.scss"
import {memo} from "react";
import {AuthCaption} from "@/react/shared/ui/authCaption/AuthCaption";
import {FormWrapper} from "@/react/shared/ui/formWrapper/ui/FormWrapper";

interface AuthFormProps {
    headTitle: string;
    headCaption: string;
    titleLogin: string;
    placeholderLogin: string;
    titlePassword: string;
    placeholderPassword: string;
    buttonChildren: string;
}

export const AuthForm = memo((props: AuthFormProps) => {

    const {
        titleLogin,
        placeholderLogin,
        titlePassword,
        placeholderPassword,
        buttonChildren,
        headTitle,
        headCaption,
    } = props;

    return (
        <section className={cls.Container}>
            <AuthCaption title={headTitle} caption={headCaption}/>
            <article className={cls.ContainerLogout}>
                <Input placeholder={placeholderLogin} title={titleLogin} type={"text"}/>
                <Input placeholder={placeholderPassword} title={titlePassword} type={"password"}/>
                <Button children={buttonChildren} theme={ButtonTheme.DEFAULT_THEME} size={ButtonSize.BIG}/>
            </article>
        </section>
    )
})