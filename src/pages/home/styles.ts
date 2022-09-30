import styled from "styled-components";

export const HomeContainer = styled.main`
max-width: 864px;
margin: 0 auto;
`

export const PublishedInfos = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 4.5rem;

label {
    font-weight: 700;
    line-height: 1.6;
    font-size: 1.125rem;
}

span {
    color: ${props => props.theme["base-300"]};
    font-size: 0.875rem;
}
`

export const SearchInput = styled.input`
color: ${props => props.theme["base-200"]};
margin-top: 0.75rem;
padding: 0.75rem 1rem;
width:100%;
background-color: ${props => props.theme["base-900"]};
border: 1px solid ${props => props.theme["base-500"]};
border-radius: 6px;

&:focus {
    border: 1px solid ${props => props.theme.primary};  
}

&::placeholder {
    color: ${props => props.theme["base-400"]}
}
`

export const ArticlesSection = styled.section`
margin-top: 3rem;
display: grid;
grid-template-columns:  repeat(2, 1fr);
gap: 2rem;
`