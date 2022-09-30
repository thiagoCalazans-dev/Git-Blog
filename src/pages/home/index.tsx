import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiGit } from "../../lib/axios";
import { ArticleCard } from "./components/ArticleCard";
import { UserCard } from "./components/UserCard";
import { ArticlesSection, HomeContainer, PublishedInfos, SearchInput } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export interface Issue {
    id: string;
    number: number;
    title: string;
    body: string;
    created_at: string;
}

const searchFormSchema = z.object({
    query: z.string(),
});

type searchFormInputs = z.infer<typeof searchFormSchema>;



export function Home() {

    const [issues, setIssues] = useState<Issue[]>([])
    const [issuesQuantity, setIssuesQuantity] = useState(0)
    const searchInput = ""

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<searchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });


    const fetchGitProfileInfos = useCallback(async (query: string = "") => {
        const response = await apiGit.get("/search/issues", {
            params: {
                _sort: "createdAt",
                _order: "desc",
                q: `repo:thiagoCalazans-dev/Git-Blog ${query}`
            }
        });
        console.log(response.data.items)
        setIssuesQuantity(response.data.total_count)
        setIssues(response.data.items);
    }, [])

    useEffect(() => {
        fetchGitProfileInfos();
    }, [fetchGitProfileInfos]);

    async function handleSearchIssues({ query }: searchFormInputs) {
        await fetchGitProfileInfos(query);
    }

    return <HomeContainer>
        <UserCard />
        <PublishedInfos>
            <label>Publicações</label>
            <span> {issuesQuantity} {issuesQuantity === 1 ? "publicação" : "publicações"}</span>
        </PublishedInfos>
        <form onSubmit={handleSubmit(handleSearchIssues)}>
            <SearchInput type="text" placeholder="Buscar conteudo"   {...register("query")} />
        </form>
        <ArticlesSection>
            {issues.map((item) => {
                return <ArticleCard key={item.id} issue={item} />
            })}

        </ArticlesSection>
    </HomeContainer>
}