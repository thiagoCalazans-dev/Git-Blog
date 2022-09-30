import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled(Link)`
text-decoration: none;
padding: 2rem;
height: 16.25rem;
background-color: ${props => props.theme["base-600"]};
border: 1px solid transparent;
border-radius: 10px;
max-width: 26rem;
overflow: hidden;
    


&:hover{
    border: 1px solid ${props => props.theme["base-400"]};  
}

header {
    display: flex;
    gap: 1rem;
    justify-content: space-between;

    strong {
        font-size:1.25rem;
        font-weight: 700;
        line-height: 1.6;
        color: ${props => props.theme.white};
        max-height: 4rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    span {
        color: ${props => props.theme["base-300"]};
        font-size: 0.875rem;
        line-height: 1.6;
        white-space: nowrap;
    }
}
  


p {
    max-height: 7rem;
    margin-top: 1.25rem;
    color: ${props => props.theme["base-200"]};
    line-height: 1.6;  
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
   

}


`