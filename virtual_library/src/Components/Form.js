import React, { useState } from "react";
import { useField } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { StyledTextInput, StyledLabel, StyledIcon, Erromsg, StyledSelect } from "./Style";

export const TextInput = ({ icon, ...props }) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);
    return (
        <div style={{ position: "relative" }}>
            <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>


            {props.type !== "password" && (
                <StyledTextInput
                    {...field}
                    {...props}
                    style={{ borderRadius: "10px"}}
                />
            )}

            {props.type === "password" && (
                <StyledTextInput
                    {...field}
                    {...props}
                    type={show ? "text" : "password"}
                    style={{ borderRadius: "10px"}}
                />
            )}


            <StyledIcon>{icon}</StyledIcon>

            {
                props.type === "password" &&
                <StyledIcon onClick={() => setShow(!show)} right>
                    {show && <FiEye />}
                    {!show && <FiEyeOff />}
                </StyledIcon>
            }


            {meta.touched && meta.error ? (
                <Erromsg>{meta.error}</Erromsg>
            ) : (
                <Erromsg style={{ visibility: "hidden" }}></Erromsg>
            )}




        </div>
    )
}


export const CustomSelect = ({ icon, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>

            <StyledSelect
                {...field}
                {...props}
            />


            <StyledIcon>{icon}</StyledIcon>

            {meta.touched && meta.error ? (
                <Erromsg>{meta.error}</Erromsg>
            ) : (
                <Erromsg style={{ visibility: "hidden" }}></Erromsg>
            )}

        </div>
    )
}

export const SettingsInput = ({ icon, ...props }) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);
    return (
        <div style={{ position: "relative" }}>


            {props.type !== "password" && (
                <input
                    {...field}
                    {...props}
                    onChange={field.onChange}
                />
            )}

            {props.type === "password" && (
                <input
                    {...field}
                    {...props}
                    type={show ? "text" : "password"}
                />
            )}


            {
                props.type === "password" &&
                <StyledIcon onClick={() => setShow(!show)} right style={{ top: '0px' }}>
                    {show && <FiEye />}
                    {!show && <FiEyeOff />}
                </StyledIcon>
            }


            {meta.touched && meta.error ? (
                <Erromsg style={{ paddingLeft: '10px' }}>{meta.error}</Erromsg>
            ) : (
                <Erromsg style={{ visibility: "hidden", paddingLeft: '10px' }}></Erromsg>
            )}



        </div>
    )
}

export const SettingsSelect = ({ icon, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>

            <select
                {...field}
                {...props}
                onChange={field.onChange}
            />

            {meta.touched && meta.error ? (
                <Erromsg style={{ paddingLeft: '10px' }}>{meta.error}</Erromsg>
            ) : (
                <Erromsg style={{ visibility: "hidden", paddingLeft: '10px' }}></Erromsg>
            )}

        </div>
    )
}