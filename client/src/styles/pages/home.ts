import { styled } from "../../../stitches.config";

export const Container = styled("section", {   
    width: "200vh",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

export const ReminderContainer = styled("div", {
    width: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    border: "4px solid $purple200",
    gap: "0.5rem",
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 80,
    paddingRight: 80,
    borderRadius: "$md",

    h1: {
       fontSize: "$2xl",
    },

    h2: {
        fontSize: "$xl",
     },
    
})