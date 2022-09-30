import styled from "styled-components";

export const CardContainer = styled.section`
display: flex;
background: transparent;
background-color: ${props => props.theme["base-700"]};
gap: 2rem;
margin-top: -5.5rem;
border-radius: 10px;
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

img {
    height: 9.25rem;
    width:9.25rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 2.5rem;
    border-radius: 8px;
}

`

export const Content = styled.div`
    width: 100%;
   margin-top: 2.5rem;
   margin-bottom: 2rem;
   margin-right: 2rem;
   display: flex;
   flex-direction: column;   
  


   header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
   

    > strong {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.3;
    }

    > a {
        display: flex;
        align-items: center;
        text-decoration: none;
        
        gap: 0.5rem;
        color: ${props => props.theme.primary};
        font-size: 0.75rem;
        line-height: 1.6;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
        border-bottom: 1px solid transparent;
     
        &:hover{
            border-bottom: 1px solid ${props => props.theme.primary}
        }


    }   
   }

   p {   
        
      color: ${props => props.theme["base-200"]};
      line-height: 1.6; 
      margin-top: 0.5rem;
      flex: 1;        
    }

    footer {
    display: flex;
    gap: 1.5rem;     
    }
`

export const Username = styled.div`
display: flex;
gap: 0.5rem;
align-items: center;

svg {
    color: ${props => props.theme["base-400"]}
}

`