import styled from "styled-components";

export const IssuesContainer = styled.main`
max-width: 864px;
margin: 0 auto;

article {
        margin-top: 2.5rem;
    }
`
export const TitleCard = styled.section`
display: flex;
flex-direction: column;
padding: 2rem;
background: transparent;
background-color: ${props => props.theme["base-700"]};
margin-top: -5.5rem;
border-radius: 10px;
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;

    a {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        text-decoration:none;
        color: ${props => props.theme.primary} ; 
        cursor: pointer;
        border-bottom: 1px solid transparent;
     
        &:hover{
            border-bottom: 1px solid ${props => props.theme.primary}
        } 

    }
}

h1 {
    margin-top: 1.25rem;
    margin-bottom:0.5rem;
    font-weight: 700;
    line-height: 1.3;
    font-size: 1.5rem;
    color: ${props => props.theme.white}
}

footer {
    display: flex;
    gap: 1.5rem;   
    justify-self: flex-end;  
    }
   
`

export const Username = styled.div`
display: flex;
gap: 0.5rem;
align-items: center;
    color: ${props => props.theme["base-300"]}

`