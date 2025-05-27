import { z } from "zod";
import { GitHubPullRequestSchema } from "../common/types.js";
export declare const PullRequestFileSchema: z.ZodObject<{
    sha: z.ZodString;
    filename: z.ZodString;
    status: z.ZodEnum<["added", "removed", "modified", "renamed", "copied", "changed", "unchanged"]>;
    additions: z.ZodNumber;
    deletions: z.ZodNumber;
    changes: z.ZodNumber;
    blob_url: z.ZodString;
    raw_url: z.ZodString;
    contents_url: z.ZodString;
    patch: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "added" | "removed" | "modified" | "renamed" | "copied" | "changed" | "unchanged";
    sha: string;
    filename: string;
    additions: number;
    deletions: number;
    changes: number;
    blob_url: string;
    raw_url: string;
    contents_url: string;
    patch?: string | undefined;
}, {
    status: "added" | "removed" | "modified" | "renamed" | "copied" | "changed" | "unchanged";
    sha: string;
    filename: string;
    additions: number;
    deletions: number;
    changes: number;
    blob_url: string;
    raw_url: string;
    contents_url: string;
    patch?: string | undefined;
}>;
export declare const StatusCheckSchema: z.ZodObject<{
    url: z.ZodString;
    state: z.ZodEnum<["error", "failure", "pending", "success"]>;
    description: z.ZodNullable<z.ZodString>;
    target_url: z.ZodNullable<z.ZodString>;
    context: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    description: string | null;
    created_at: string;
    updated_at: string;
    state: "error" | "failure" | "pending" | "success";
    target_url: string | null;
    context: string;
}, {
    url: string;
    description: string | null;
    created_at: string;
    updated_at: string;
    state: "error" | "failure" | "pending" | "success";
    target_url: string | null;
    context: string;
}>;
export declare const CombinedStatusSchema: z.ZodObject<{
    state: z.ZodEnum<["error", "failure", "pending", "success"]>;
    statuses: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        state: z.ZodEnum<["error", "failure", "pending", "success"]>;
        description: z.ZodNullable<z.ZodString>;
        target_url: z.ZodNullable<z.ZodString>;
        context: z.ZodString;
        created_at: z.ZodString;
        updated_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        description: string | null;
        created_at: string;
        updated_at: string;
        state: "error" | "failure" | "pending" | "success";
        target_url: string | null;
        context: string;
    }, {
        url: string;
        description: string | null;
        created_at: string;
        updated_at: string;
        state: "error" | "failure" | "pending" | "success";
        target_url: string | null;
        context: string;
    }>, "many">;
    sha: z.ZodString;
    total_count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    sha: string;
    state: "error" | "failure" | "pending" | "success";
    total_count: number;
    statuses: {
        url: string;
        description: string | null;
        created_at: string;
        updated_at: string;
        state: "error" | "failure" | "pending" | "success";
        target_url: string | null;
        context: string;
    }[];
}, {
    sha: string;
    state: "error" | "failure" | "pending" | "success";
    total_count: number;
    statuses: {
        url: string;
        description: string | null;
        created_at: string;
        updated_at: string;
        state: "error" | "failure" | "pending" | "success";
        target_url: string | null;
        context: string;
    }[];
}>;
export declare const PullRequestCommentSchema: z.ZodObject<{
    url: z.ZodString;
    id: z.ZodNumber;
    node_id: z.ZodString;
    pull_request_review_id: z.ZodNullable<z.ZodNumber>;
    diff_hunk: z.ZodString;
    path: z.ZodNullable<z.ZodString>;
    position: z.ZodNullable<z.ZodNumber>;
    original_position: z.ZodNullable<z.ZodNumber>;
    commit_id: z.ZodString;
    original_commit_id: z.ZodString;
    user: z.ZodObject<{
        login: z.ZodString;
        id: z.ZodNumber;
        avatar_url: z.ZodString;
        url: z.ZodString;
        html_url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    }, {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    }>;
    body: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    html_url: z.ZodString;
    pull_request_url: z.ZodString;
    author_association: z.ZodString;
    _links: z.ZodObject<{
        self: z.ZodObject<{
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            href: string;
        }, {
            href: string;
        }>;
        html: z.ZodObject<{
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            href: string;
        }, {
            href: string;
        }>;
        pull_request: z.ZodObject<{
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            href: string;
        }, {
            href: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        self: {
            href: string;
        };
        html: {
            href: string;
        };
        pull_request: {
            href: string;
        };
    }, {
        self: {
            href: string;
        };
        html: {
            href: string;
        };
        pull_request: {
            href: string;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    path: string | null;
    id: number;
    node_id: string;
    url: string;
    html_url: string;
    created_at: string;
    updated_at: string;
    _links: {
        self: {
            href: string;
        };
        html: {
            href: string;
        };
        pull_request: {
            href: string;
        };
    };
    user: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    };
    body: string;
    pull_request_review_id: number | null;
    diff_hunk: string;
    position: number | null;
    original_position: number | null;
    commit_id: string;
    original_commit_id: string;
    pull_request_url: string;
    author_association: string;
}, {
    path: string | null;
    id: number;
    node_id: string;
    url: string;
    html_url: string;
    created_at: string;
    updated_at: string;
    _links: {
        self: {
            href: string;
        };
        html: {
            href: string;
        };
        pull_request: {
            href: string;
        };
    };
    user: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    };
    body: string;
    pull_request_review_id: number | null;
    diff_hunk: string;
    position: number | null;
    original_position: number | null;
    commit_id: string;
    original_commit_id: string;
    pull_request_url: string;
    author_association: string;
}>;
export declare const PullRequestReviewSchema: z.ZodObject<{
    id: z.ZodNumber;
    node_id: z.ZodString;
    user: z.ZodObject<{
        login: z.ZodString;
        id: z.ZodNumber;
        avatar_url: z.ZodString;
        url: z.ZodString;
        html_url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    }, {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    }>;
    body: z.ZodNullable<z.ZodString>;
    state: z.ZodEnum<["APPROVED", "CHANGES_REQUESTED", "COMMENTED", "DISMISSED", "PENDING"]>;
    html_url: z.ZodString;
    pull_request_url: z.ZodString;
    commit_id: z.ZodString;
    submitted_at: z.ZodNullable<z.ZodString>;
    author_association: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    node_id: string;
    html_url: string;
    state: "APPROVED" | "CHANGES_REQUESTED" | "COMMENTED" | "DISMISSED" | "PENDING";
    user: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    };
    body: string | null;
    commit_id: string;
    pull_request_url: string;
    author_association: string;
    submitted_at: string | null;
}, {
    id: number;
    node_id: string;
    html_url: string;
    state: "APPROVED" | "CHANGES_REQUESTED" | "COMMENTED" | "DISMISSED" | "PENDING";
    user: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    };
    body: string | null;
    commit_id: string;
    pull_request_url: string;
    author_association: string;
    submitted_at: string | null;
}>;
export declare const CreatePullRequestSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    title: z.ZodString;
    body: z.ZodOptional<z.ZodString>;
    head: z.ZodString;
    base: z.ZodString;
    draft: z.ZodOptional<z.ZodBoolean>;
    maintainer_can_modify: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    owner: string;
    title: string;
    repo: string;
    head: string;
    base: string;
    body?: string | undefined;
    draft?: boolean | undefined;
    maintainer_can_modify?: boolean | undefined;
}, {
    owner: string;
    title: string;
    repo: string;
    head: string;
    base: string;
    body?: string | undefined;
    draft?: boolean | undefined;
    maintainer_can_modify?: boolean | undefined;
}>;
export declare const GetPullRequestSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    pull_number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    owner: string;
    repo: string;
    pull_number: number;
}, {
    owner: string;
    repo: string;
    pull_number: number;
}>;
export declare const ListPullRequestsSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    state: z.ZodOptional<z.ZodEnum<["open", "closed", "all"]>>;
    head: z.ZodOptional<z.ZodString>;
    base: z.ZodOptional<z.ZodString>;
    sort: z.ZodOptional<z.ZodEnum<["created", "updated", "popularity", "long-running"]>>;
    direction: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    per_page: z.ZodOptional<z.ZodNumber>;
    page: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    owner: string;
    repo: string;
    sort?: "created" | "updated" | "popularity" | "long-running" | undefined;
    state?: "open" | "closed" | "all" | undefined;
    head?: string | undefined;
    base?: string | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
    direction?: "asc" | "desc" | undefined;
}, {
    owner: string;
    repo: string;
    sort?: "created" | "updated" | "popularity" | "long-running" | undefined;
    state?: "open" | "closed" | "all" | undefined;
    head?: string | undefined;
    base?: string | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
    direction?: "asc" | "desc" | undefined;
}>;
export declare const CreatePullRequestReviewSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    pull_number: z.ZodNumber;
    commit_id: z.ZodOptional<z.ZodString>;
    body: z.ZodString;
    event: z.ZodEnum<["APPROVE", "REQUEST_CHANGES", "COMMENT"]>;
    comments: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        path: z.ZodString;
        position: z.ZodNumber;
        body: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        body: string;
        position: number;
    }, {
        path: string;
        body: string;
        position: number;
    }>, z.ZodObject<{
        path: z.ZodString;
        line: z.ZodNumber;
        body: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        body: string;
        line: number;
    }, {
        path: string;
        body: string;
        line: number;
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    owner: string;
    body: string;
    repo: string;
    pull_number: number;
    event: "APPROVE" | "REQUEST_CHANGES" | "COMMENT";
    comments?: ({
        path: string;
        body: string;
        position: number;
    } | {
        path: string;
        body: string;
        line: number;
    })[] | undefined;
    commit_id?: string | undefined;
}, {
    owner: string;
    body: string;
    repo: string;
    pull_number: number;
    event: "APPROVE" | "REQUEST_CHANGES" | "COMMENT";
    comments?: ({
        path: string;
        body: string;
        position: number;
    } | {
        path: string;
        body: string;
        line: number;
    })[] | undefined;
    commit_id?: string | undefined;
}>;
export declare const MergePullRequestSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    pull_number: z.ZodNumber;
    commit_title: z.ZodOptional<z.ZodString>;
    commit_message: z.ZodOptional<z.ZodString>;
    merge_method: z.ZodOptional<z.ZodEnum<["merge", "squash", "rebase"]>>;
}, "strip", z.ZodTypeAny, {
    owner: string;
    repo: string;
    pull_number: number;
    commit_title?: string | undefined;
    commit_message?: string | undefined;
    merge_method?: "merge" | "squash" | "rebase" | undefined;
}, {
    owner: string;
    repo: string;
    pull_number: number;
    commit_title?: string | undefined;
    commit_message?: string | undefined;
    merge_method?: "merge" | "squash" | "rebase" | undefined;
}>;
export declare const GetPullRequestFilesSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    pull_number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    owner: string;
    repo: string;
    pull_number: number;
}, {
    owner: string;
    repo: string;
    pull_number: number;
}>;
export declare const GetPullRequestStatusSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    pull_number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    owner: string;
    repo: string;
    pull_number: number;
}, {
    owner: string;
    repo: string;
    pull_number: number;
}>;
export declare const UpdatePullRequestBranchSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    pull_number: z.ZodNumber;
    expected_head_sha: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    owner: string;
    repo: string;
    pull_number: number;
    expected_head_sha?: string | undefined;
}, {
    owner: string;
    repo: string;
    pull_number: number;
    expected_head_sha?: string | undefined;
}>;
export declare const GetPullRequestCommentsSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    pull_number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    owner: string;
    repo: string;
    pull_number: number;
}, {
    owner: string;
    repo: string;
    pull_number: number;
}>;
export declare const GetPullRequestReviewsSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    pull_number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    owner: string;
    repo: string;
    pull_number: number;
}, {
    owner: string;
    repo: string;
    pull_number: number;
}>;
export declare const AddPRSummaryCommentSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    pull_number: z.ZodNumber;
    body: z.ZodString;
}, "strip", z.ZodTypeAny, {
    owner: string;
    body: string;
    repo: string;
    pull_number: number;
}, {
    owner: string;
    body: string;
    repo: string;
    pull_number: number;
}>;
export declare const AddPRLineCommentSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    pull_number: z.ZodNumber;
    body: z.ZodString;
    path: z.ZodString;
    line: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    path: string;
    owner: string;
    body: string;
    repo: string;
    pull_number: number;
    line: number;
}, {
    path: string;
    owner: string;
    body: string;
    repo: string;
    pull_number: number;
    line: number;
}>;
export declare function createPullRequest(params: z.infer<typeof CreatePullRequestSchema>): Promise<z.infer<typeof GitHubPullRequestSchema>>;
export declare function getPullRequest(owner: string, repo: string, pullNumber: number): Promise<z.infer<typeof GitHubPullRequestSchema>>;
export declare function listPullRequests(owner: string, repo: string, options: Omit<z.infer<typeof ListPullRequestsSchema>, 'owner' | 'repo'>): Promise<z.infer<typeof GitHubPullRequestSchema>[]>;
export declare function createPullRequestReview(owner: string, repo: string, pullNumber: number, options: Omit<z.infer<typeof CreatePullRequestReviewSchema>, 'owner' | 'repo' | 'pull_number'>): Promise<z.infer<typeof PullRequestReviewSchema>>;
export declare function mergePullRequest(owner: string, repo: string, pullNumber: number, options: Omit<z.infer<typeof MergePullRequestSchema>, 'owner' | 'repo' | 'pull_number'>): Promise<any>;
export declare function getPullRequestFiles(owner: string, repo: string, pullNumber: number): Promise<z.infer<typeof PullRequestFileSchema>[]>;
export declare function updatePullRequestBranch(owner: string, repo: string, pullNumber: number, expectedHeadSha?: string): Promise<void>;
export declare function getPullRequestComments(owner: string, repo: string, pullNumber: number): Promise<z.infer<typeof PullRequestCommentSchema>[]>;
export declare function getPullRequestReviews(owner: string, repo: string, pullNumber: number): Promise<z.infer<typeof PullRequestReviewSchema>[]>;
export declare function getPullRequestStatus(owner: string, repo: string, pullNumber: number): Promise<z.infer<typeof CombinedStatusSchema>>;
/**
 * Add a summary comment to a pull request
 */
export declare function addPRSummaryComment(owner: string, repo: string, pullNumber: number, body: string): Promise<any>;
/**
 * Add a line-specific comment to a pull request
 */
export declare function addPRLineComment(owner: string, repo: string, pullNumber: number, body: string, path: string, line: number): Promise<any>;
