import cls from "./login.module.scss"
import {AuthForm} from "@/react/shared/ui/authForm/ui/AuthForm";
import {InputEnums} from "@/react/components/login/helpers/inputEnums";
import {HeadAuth} from "@/react/shared/ui/headAuth/HeadAuth";
import {FormWrapper} from "@/react/shared/ui/formWrapper/ui/FormWrapper";

export const Login = () => {
    return (
        <article className={cls.ContainerLogin}>
            <HeadAuth
                title={"Онлайн тестирование в team24"}
                caption={"Зарегестрируйтесь или войдите в аккаунт для начала тестирования"}
            />
            <FormWrapper>
                <AuthForm
                    headTitle={"Добро пожаловать"}
                    headCaption={"Войдите в свою учетную запись team24"}
                    titleLogin={InputEnums.LOGIN_INPUT}
                    placeholderLogin={InputEnums.LOGIN_INPUT}
                    titlePassword={InputEnums.PASSWORD_INPUT}
                    placeholderPassword={InputEnums.PASSWORD_INPUT}
                    buttonChildren={"Начать тэстирование"}
                />
            </FormWrapper>
        </article>
    )
}