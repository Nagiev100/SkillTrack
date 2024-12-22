import cls from './authCaption.module.scss'
import {memo} from "react";
import {HeadAuthProps} from "@/react/shared/ui/headAuth/HeadAuth";

interface AuthCaptionProps extends Pick<HeadAuthProps, 'title' | 'caption'> {}

export const AuthCaption = memo((props: AuthCaptionProps) => {

    const {title, caption} = props;

    return (
        <div className={cls.ContainerTitle}>
            <h2>{title}</h2>
            <p>{caption}</p>
        </div>
    )
})