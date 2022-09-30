import { Issue } from "../..";
import { CardContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";


interface ArticleCardProps {
    issue: Issue
}

export const dateFormatter = new Intl.DateTimeFormat("pt-BR");

export function ArticleCard({ issue }: ArticleCardProps) {
    return (
        <CardContainer to={`/${issue.number}`}>
            <header>
                <strong>{issue.title}</strong>
                <span>{formatDistanceToNow(new Date(issue.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                })}</span>
            </header>
            <p>{issue.body}</p>

        </CardContainer>
    )
}