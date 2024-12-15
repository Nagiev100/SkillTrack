import {ReactNode} from "react";
import cls from "./form.module.scss"

interface FormProps {
    children: ReactNode
}

export const Form = (props: FormProps) => {
    const {children} = props;

    return (
      <div className={cls.ContainerForm}>
          {children}
      </div>
    )
}