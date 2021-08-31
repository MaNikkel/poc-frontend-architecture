import React from "react"
import ButtonProps from "./model"
import { Container } from "./styles";

const Button: React.FC<ButtonProps> = ({ children, type, ...props }) => {
    return (
        <Container type={type} {...props}>
            {children}
        </Container>
    )
}

export default Button;