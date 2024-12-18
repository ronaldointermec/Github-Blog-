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
}

interface IssueProviderProps {
    children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextype)


export function IssuesProvider({ children }: IssueProviderProps) {
    const [issues, setIssues] = useState<Issue[]>([])

    // const query = 'repo:ronaldointermec/Github-Blog- Boas práticas para devs em início de carreira'
    const query = 'repo:ronaldointermec/Github-Blog-'

    const fetchIssues = useCallback(async () => {
        const response = await api.get('/search/issues', {
            params: {
                q: query
            }
        })


        setIssues(response.data.items)
        // console.log(response.data)

    }, [])

    useEffect(() => {
        fetchIssues()
    }, [fetchIssues])

    return (
        <IssuesContext.Provider value={{
            issues
        }}>
            {children}
        </IssuesContext.Provider>
    )
}



