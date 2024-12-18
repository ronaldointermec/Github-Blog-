import { useContext } from "react";
import { IssuesContext } from "../contexts/IssuesContext";

export function useIssue() {
    return useContext(IssuesContext)
}