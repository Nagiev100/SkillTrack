import {memo} from "react";
import cls from './headAuth.module.scss'

export interface HeadAuthProps {
    title: string;
    caption: string;
}

export const HeadAuth = memo((props: HeadAuthProps) => {

    const {title, caption} = props;
     return (
         <section className={cls.ContainerHeadAuth}>
             <h1>{title}</h1>
             <p>{caption}</p>
         </section>
     )
})