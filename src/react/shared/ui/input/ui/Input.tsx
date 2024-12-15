import cls from './input.module.scss'

interface InputProps {
    placeholder: string;
    title?: string;
    type?: string
}

export const Input = (props: InputProps) => {

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
}