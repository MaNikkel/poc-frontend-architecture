import { ButtonProps as ButtonPropsMui } from "@material-ui/core/Button"

export default interface ButtonProps extends ButtonPropsMui {
    type: "button" | "reset" | "submit"
}