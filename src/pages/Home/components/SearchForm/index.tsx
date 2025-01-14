import { useIssue } from "../../../../hooks/useIssue"
import { FormContainer } from "./styles"
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
    query: z.string().min(1, 'Informe o título')
})
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {

    const { fetchIssues } = useIssue()
    const {
        register,
        handleSubmit,
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchIssus(data: SearchFormInputs) {


        await fetchIssues(data.query);
    }

    return (
        <FormContainer id="issue" onSubmit={handleSubmit(handleSearchIssus)}>
            <input
                type="text"
                placeholder="Buscar conteúdo"
                {...register('query')}
            />
        </FormContainer>
    )
}