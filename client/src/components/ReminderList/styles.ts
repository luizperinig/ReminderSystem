import { serialize } from "v8";
import { styled } from "../../../stitches.config";

export const ReminderListContainer = styled("div", {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",  
})

export const DateTitle = styled("h2", {
    fontSize: "$lg",
    color: "$gray100",
    marginTop: "$4",
    marginBottom: "$1",
})

export const RemindersByDate = styled("ul", {
    gap: "$2",
    width: "100%",
    
    li: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "flex-start",
        marginLeft: "$5",
        position: "relative",

        "&::before": {
            content: '"•"',  
            position: "absolute",
            left: "-$5",  
            top: "50%",
            transform: "translateY(-50%)",
            color: "$gray100",  
            fontSize: "1.2rem",  
        },
    
        svg: {
            cursor: "pointer",
            color: "$gray100",
            transition: "0.3s",
            
            "&:hover": {
                color: "#f75a68",  
            }   
        }
    }
})