import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

/**
 * https://api.github.com/search/issues?q=repo:ronaldointermec/Github-Blog- %20Boas%20pr%C3%A1ticas%20para%20devs%20em%20in%C3%ADcio%20de%20carreira
 */

interface Issue {
    id: string
    title: string
    created_at: string
    body: string
    number: number
}

interface IssuesContextype {
    issues:Issue[]
    fetchIssues: (query:string) => Promise<void>
}

interface IssueProviderProps {
    children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextype)


export function IssuesProvider({ children }: IssueProviderProps) {
    const [issues, setIssues] = useState<Issue[]>([])


    const fetchIssues = useCallback(async (query?:string) => {
          console.log(query)
        const response = await api.get('/search/issues', {
            params: {
                q: `repo:ronaldointermec/Github-Blog- ${query ? query : ''}`
            }
        })

        setIssues(response.data.items)

    }, [])

    useEffect(() => {
        fetchIssues()
    }, [fetchIssues])

    return (
        <IssuesContext.Provider value={{
            issues,
            fetchIssues
        }}>
            {children}
        </IssuesContext.Provider>
    )
}



