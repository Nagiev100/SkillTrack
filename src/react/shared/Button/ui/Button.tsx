import {memo, ReactNode} from "react";

export enum ButtonTheme {
    DEFAULT = 'defaultTheme',
    GRADE = 'gradeTheme',
}

export enum ButtonSize {
    SMALL = "buttonSmall",
    BIG = "buttonBig"
}

interface ButtonProps {
    id: string;
    children: ReactNode;
    size?: ButtonSize;
    theme?: ButtonTheme;
    disabled?: boolean;
    onClick?: () => void;
}

export const Button = memo((props: ButtonProps) => {

    const {
        children,
        size = ButtonSize.BIG,
        theme = ButtonTheme.DEFAULT,
        disabled,
        onClick,
        id,
    } = props;

    return (
        <button
          type={'button'}
          id={id}
          disabled={disabled}
          onClick={onClick}
        >
            {children}
        </button>
    )
})