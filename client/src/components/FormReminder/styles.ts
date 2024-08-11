import { styled } from "../../../stitches.config";

export const FormReminderContainer = styled("form",  {
    display: "flex",
    flexDirection: "column",
    gap: "$2",
    width: "130%",
    marginBottom: "$8",
    fontWeight: "$bold",

    div:{
        marginBottom: "$3",
    },
})

export const InputContainer = styled("input",  {
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    border: "3px solid $purple200",
    padding: "$2",
    borderRadius: "$md",
    fontSize: "$md",
    color: "$gray100",
    width: "100%",
    background: "transparent",
    marginTop: "$1",

    "&::-webkit-calendar-picker-indicator": {
    display: "none",
    WebkitAppearance: "none",
    position: "absolute",
    right: "0",
  },
})

export const ButtonContainer = styled("button", {
    padding: "$3 $10",
    backgroundColor: "$purple200",
    color: "$white",
    borderRadius: "$md",
    border: "none",
    cursor: "pointer",
    transition: "0.3s",
    fontSize: "$md",
    fontWeight: "$bold",
    
    "&:hover": {
        backgroundColor: "$purple100"
    },

})

export const Container = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "600px", // Definindo um tamanho máximo
    margin: "0 auto",
    padding: "$4",
    boxSizing: "border-box",
})

export const FormError = styled("span", {
    color: "#f75a68",
    fontSize: "$sm",
})