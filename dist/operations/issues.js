import { z } from "zod";
import { githubRequest, buildUrl } from "../common/utils.js";
export const GetIssueSchema = z.object({
    owner: z.string(),
    repo: z.string(),
    issue_number: z.number(),
});
export const IssueCommentSchema = z.object({
    owner: z.string(),
    repo: z.string(),
    issue_number: z.number(),
    body: z.string(),
});
export const CreateIssueOptionsSchema = z.object({
    title: z.string(),
    body: z.string().optional(),
    assignees: z.array(z.string()).optional(),
    milestone: z.number().optional(),
    labels: z.array(z.string()).optional(),
});
export const CreateIssueSchema = z.object({
    owner: z.string(),
    repo: z.string(),
    ...CreateIssueOptionsSchema.shape,
});
export const ListIssuesOptionsSchema = z.object({
    owner: z.string(),
    repo: z.string(),
    direction: z.enum(["asc", "desc"]).optional(),
    labels: z.array(z.string()).optional(),
    page: z.number().optional(),
    per_page: z.number().optional(),
    since: z.string().optional(),
    sort: z.enum(["created", "updated", "comments"]).optional(),
    state: z.enum(["open", "closed", "all"]).optional(),
});
export const UpdateIssueOptionsSchema = z.object({
    owner: z.string(),
    repo: z.string(),
    issue_number: z.number(),
    title: z.string().optional(),
    body: z.string().optional(),
    assignees: z.array(z.string()).optional(),
    milestone: z.number().optional(),
    labels: z.array(z.string()).optional(),
    state: z.enum(["open", "closed"]).optional(),
});
export async function getIssue(owner, repo, issue_number) {
    return githubRequest(`https://api.github.com/repos/${owner}/${repo}/issues/${issue_number}`);
}
export async function addIssueComment(owner, repo, issue_number, body) {
    return githubRequest(`https://api.github.com/repos/${owner}/${repo}/issues/${issue_number}/comments`, {
        method: "POST",
        body: { body },
    });
}
export async function createIssue(owner, repo, options) {
    return githubRequest(`https://api.github.com/repos/${owner}/${repo}/issues`, {
        method: "POST",
        body: options,
    });
}
export async function listIssues(owner, repo, options) {
    const urlParams = {
        direction: options.direction,
        labels: options.labels?.join(","),
        page: options.page?.toString(),
        per_page: options.per_page?.toString(),
        since: options.since,
        sort: options.sort,
        state: options.state
    };
    return githubRequest(buildUrl(`https://api.github.com/repos/${owner}/${repo}/issues`, urlParams));
}
export async function updateIssue(owner, repo, issue_number, options) {
    return githubRequest(`https://api.github.com/repos/${owner}/${repo}/issues/${issue_number}`, {
        method: "PATCH",
        body: options,
    });
}
//# sourceMappingURL=issues.js.map