import { memo } from "react";
import cls from './headAuth.module.scss'

export interface HeadAuthProps {
    title: string;
    caption: string;
}

const markWord = (title: string, keyword: string) => {

    return title.split(' ').map((word, index) =>
        word.toLowerCase() === keyword.toLowerCase() ? (
            <span key={index} className={cls.coloredText}>{word}</span>
        ) : word + ' '
    );
};

export const HeadAuth = memo((props: HeadAuthProps) => {

    const { title, caption } = props;

    return (
        <section className={cls.ContainerHeadAuth}>
            <h1>{markWord(title, 'team24')}</h1>
            <p>{caption}</p>
        </section>
    );
});
