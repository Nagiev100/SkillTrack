import cls from './input.module.scss'
import {memo} from "react";

interface InputProps {
    placeholder: string;
    title: string;
    type: string
}

export const Input = memo((props: InputProps) => {

    const {placeholder, title, type} = props;

    return (
        <article className={cls.InputContainer} >
            {title && <p className={cls.TitleInput}>{title}</p>}
            <input
                type={type}
                placeholder={placeholder}
                className={cls.Input}
            />
        </article>
    )
})