import { CardContainer, Content, Username } from "./styles";
import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react"
import { useEffect, useState } from "react";
import { apiGit } from "../../../../lib/axios";

interface GitProfile {
    name: string;
    company: string;
    html_url: string;
    avatar_url: string;
    followers: number;
    login: string;
    bio: string;
}

export function UserCard() {

    const [gitProfile, setGitProfile] = useState({} as GitProfile)

    async function fetchGitProfileInfos() {
        const response = await apiGit.get("users/thiagoCalazans-dev");
        setGitProfile(response.data);
    }

    useEffect(() => {
        fetchGitProfileInfos();
    }, []);


    return (
        <CardContainer>
            <img src={gitProfile.avatar_url} alt="imagem do usuario" />
            <Content>
                <header>
                    <strong>{gitProfile.name}</strong>
                    <a href={gitProfile.html_url}>github<ArrowSquareOut weight="bold" /></a>
                </header>
                <p>{gitProfile.bio}</p>
                <footer><Username><GithubLogo size={18} /><span>{gitProfile.login}</span></Username>
                    <Username><Buildings size={18} /><span>{gitProfile.company}</span></Username>
                    <Username><Users size={18} /><span>{gitProfile.followers}</span></Username>
                </footer>
            </Content>
        </CardContainer>
    )
}