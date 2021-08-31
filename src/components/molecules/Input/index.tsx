import React, { forwardRef } from "react"
import TextField from "@material-ui/core/TextField";
import InputProps from "./model";

const Input: React.FC<InputProps> = forwardRef(({ children, ...props }, ref) => {
    return (
        <TextField {...props} inputRef={ref}/>
    )
})

export default Input