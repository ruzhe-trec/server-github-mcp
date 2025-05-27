import { z } from "zod";
export declare const GetIssueSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    issue_number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    owner: string;
    repo: string;
    issue_number: number;
}, {
    owner: string;
    repo: string;
    issue_number: number;
}>;
export declare const IssueCommentSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    issue_number: z.ZodNumber;
    body: z.ZodString;
}, "strip", z.ZodTypeAny, {
    owner: string;
    body: string;
    repo: string;
    issue_number: number;
}, {
    owner: string;
    body: string;
    repo: string;
    issue_number: number;
}>;
export declare const CreateIssueOptionsSchema: z.ZodObject<{
    title: z.ZodString;
    body: z.ZodOptional<z.ZodString>;
    assignees: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    milestone: z.ZodOptional<z.ZodNumber>;
    labels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    title: string;
    labels?: string[] | undefined;
    assignees?: string[] | undefined;
    milestone?: number | undefined;
    body?: string | undefined;
}, {
    title: string;
    labels?: string[] | undefined;
    assignees?: string[] | undefined;
    milestone?: number | undefined;
    body?: string | undefined;
}>;
export declare const CreateIssueSchema: z.ZodObject<{
    title: z.ZodString;
    body: z.ZodOptional<z.ZodString>;
    assignees: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    milestone: z.ZodOptional<z.ZodNumber>;
    labels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    owner: z.ZodString;
    repo: z.ZodString;
}, "strip", z.ZodTypeAny, {
    owner: string;
    title: string;
    repo: string;
    labels?: string[] | undefined;
    assignees?: string[] | undefined;
    milestone?: number | undefined;
    body?: string | undefined;
}, {
    owner: string;
    title: string;
    repo: string;
    labels?: string[] | undefined;
    assignees?: string[] | undefined;
    milestone?: number | undefined;
    body?: string | undefined;
}>;
export declare const ListIssuesOptionsSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    direction: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    labels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    page: z.ZodOptional<z.ZodNumber>;
    per_page: z.ZodOptional<z.ZodNumber>;
    since: z.ZodOptional<z.ZodString>;
    sort: z.ZodOptional<z.ZodEnum<["created", "updated", "comments"]>>;
    state: z.ZodOptional<z.ZodEnum<["open", "closed", "all"]>>;
}, "strip", z.ZodTypeAny, {
    owner: string;
    repo: string;
    sort?: "comments" | "created" | "updated" | undefined;
    state?: "open" | "closed" | "all" | undefined;
    labels?: string[] | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
    direction?: "asc" | "desc" | undefined;
    since?: string | undefined;
}, {
    owner: string;
    repo: string;
    sort?: "comments" | "created" | "updated" | undefined;
    state?: "open" | "closed" | "all" | undefined;
    labels?: string[] | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
    direction?: "asc" | "desc" | undefined;
    since?: string | undefined;
}>;
export declare const UpdateIssueOptionsSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    issue_number: z.ZodNumber;
    title: z.ZodOptional<z.ZodString>;
    body: z.ZodOptional<z.ZodString>;
    assignees: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    milestone: z.ZodOptional<z.ZodNumber>;
    labels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    state: z.ZodOptional<z.ZodEnum<["open", "closed"]>>;
}, "strip", z.ZodTypeAny, {
    owner: string;
    repo: string;
    issue_number: number;
    title?: string | undefined;
    state?: "open" | "closed" | undefined;
    labels?: string[] | undefined;
    assignees?: string[] | undefined;
    milestone?: number | undefined;
    body?: string | undefined;
}, {
    owner: string;
    repo: string;
    issue_number: number;
    title?: string | undefined;
    state?: "open" | "closed" | undefined;
    labels?: string[] | undefined;
    assignees?: string[] | undefined;
    milestone?: number | undefined;
    body?: string | undefined;
}>;
export declare function getIssue(owner: string, repo: string, issue_number: number): Promise<unknown>;
export declare function addIssueComment(owner: string, repo: string, issue_number: number, body: string): Promise<unknown>;
export declare function createIssue(owner: string, repo: string, options: z.infer<typeof CreateIssueOptionsSchema>): Promise<unknown>;
export declare function listIssues(owner: string, repo: string, options: Omit<z.infer<typeof ListIssuesOptionsSchema>, "owner" | "repo">): Promise<unknown>;
export declare function updateIssue(owner: string, repo: string, issue_number: number, options: Omit<z.infer<typeof UpdateIssueOptionsSchema>, "owner" | "repo" | "issue_number">): Promise<unknown>;
