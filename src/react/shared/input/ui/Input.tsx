import cls from './input.module.scss'

interface InputProps {
    placeholder: string;
}

const Input = (props: InputProps) => {

    const {placeholder} = props;

    return (
        <input
            type={"text"}
            placeholder={placeholder}
            className={cls.InputContainer}
        />
    )
}
export default Input;