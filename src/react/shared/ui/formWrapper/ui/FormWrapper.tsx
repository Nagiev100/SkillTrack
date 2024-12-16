import {ReactNode} from "react";
import cls from "./formWrapper.module.scss"

interface FormProps {
    children: ReactNode
}

export const FormWrapper = (props: FormProps) => {
    const {children} = props;

    return (
      <div className={cls.ContainerForm}>
          {children}
      </div>
    )
}