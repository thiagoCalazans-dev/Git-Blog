import { ArrowBendUpLeft, ArrowSquareOut, Balloon, Calendar, CalendarBlank, CaretCircleLeft, ChatCircle, GithubLogo } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiGit } from "../../lib/axios";
import { IssuesContainer, TitleCard, Username } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import ReactMarkdown from "react-markdown";

interface Post {
    created_at: string;
    user: User;
    comments: number;
    body: string;
    title: string;
}

interface User {
    login: string;
}



export function Post() {


    let { id } = useParams();
    const [post, setPost] = useState<Post>()
    async function fetchPostInfosfromGitIssues() {
        const response = await apiGit.get(`/repos/thiagoCalazans-dev/Git-Blog/issues/${id}`)
        setPost(response.data)
    }

    useEffect(() => {
        fetchPostInfosfromGitIssues();
    }, []);


    return (
        <IssuesContainer>
            {post === undefined ? <strong>loading...</strong> :
                <>
                    <TitleCard>
                        <header>
                            <Link to="/"><CaretCircleLeft weight="bold" /><span>voltar</span></Link>
                            <a href={`https://github.com/thiagoCalazans-dev/Git-Blog/issues/${id}`}>
                                ver no github <ArrowSquareOut weight="bold" />
                            </a>
                        </header>
                        <h1>{post.title}</h1>
                        <footer><Username><GithubLogo size={18} /><span>{post.user.login}</span></Username>
                            <Username>
                                <CalendarBlank size={18} />
                                <span>
                                    {
                                        formatDistanceToNow(new Date(post.created_at), {
                                            addSuffix: true,
                                            locale: ptBR,
                                        })
                                    }
                                </span>
                            </Username>
                            <Username>
                                <ChatCircle size={18} /><span>{post.comments}</span>
                            </Username>
                        </footer>
                    </TitleCard>
                    <article>
                        <ReactMarkdown>{post.body}</ReactMarkdown>

                    </article>
                </>
            }
        </IssuesContainer>
    )
}