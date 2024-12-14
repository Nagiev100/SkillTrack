import {memo, ReactNode} from "react";
import cls from "./Button.module.scss"
import classNames from "classnames";

export enum ButtonTheme {
    DEFAULT_THEME = 'defaultTheme',
    GREY_THEME = 'greyTheme',
}

export enum ButtonSize {
    SMALL = "buttonSmall",
    BIG = "buttonBig"
}

interface ButtonProps {
    children: string;
    size?: ButtonSize;
    theme?: ButtonTheme;
    disabled?: boolean;
    onClick?: () => void;
}

export const Button = memo((props: ButtonProps) => {

    const {
        children,
        size = ButtonSize.BIG,
        theme = ButtonTheme.DEFAULT_THEME,
        disabled,
        onClick,
    } = props;

    return (
        <button
          type={'button'}
          className={classNames(
              cls.Button,
              cls[theme],
              cls[size],
          )}
          disabled={disabled}
          onClick={onClick}
        >
            {children}
        </button>
    )
})