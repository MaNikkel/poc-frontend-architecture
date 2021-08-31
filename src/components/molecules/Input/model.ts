import { StandardTextFieldProps } from "@material-ui/core/TextField"

export default interface InputProps extends StandardTextFieldProps {
    id: string;
    name: string;
}