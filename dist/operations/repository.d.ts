import { z } from "zod";
export declare const CreateRepositoryOptionsSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    private: z.ZodOptional<z.ZodBoolean>;
    autoInit: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name: string;
    private?: boolean | undefined;
    description?: string | undefined;
    autoInit?: boolean | undefined;
}, {
    name: string;
    private?: boolean | undefined;
    description?: string | undefined;
    autoInit?: boolean | undefined;
}>;
export declare const SearchRepositoriesSchema: z.ZodObject<{
    query: z.ZodString;
    page: z.ZodOptional<z.ZodNumber>;
    perPage: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    query: string;
    page?: number | undefined;
    perPage?: number | undefined;
}, {
    query: string;
    page?: number | undefined;
    perPage?: number | undefined;
}>;
export declare const ForkRepositorySchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    organization: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    owner: string;
    repo: string;
    organization?: string | undefined;
}, {
    owner: string;
    repo: string;
    organization?: string | undefined;
}>;
export type CreateRepositoryOptions = z.infer<typeof CreateRepositoryOptionsSchema>;
export declare function createRepository(options: CreateRepositoryOptions): Promise<{
    name: string;
    id: number;
    node_id: string;
    url: string;
    html_url: string;
    full_name: string;
    private: boolean;
    owner: {
        type: string;
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        url: string;
        html_url: string;
    };
    description: string | null;
    fork: boolean;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    default_branch: string;
}>;
export declare function searchRepositories(query: string, page?: number, perPage?: number): Promise<{
    total_count: number;
    incomplete_results: boolean;
    items: {
        name: string;
        id: number;
        node_id: string;
        url: string;
        html_url: string;
        full_name: string;
        private: boolean;
        owner: {
            type: string;
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            url: string;
            html_url: string;
        };
        description: string | null;
        fork: boolean;
        created_at: string;
        updated_at: string;
        pushed_at: string;
        git_url: string;
        ssh_url: string;
        clone_url: string;
        default_branch: string;
    }[];
}>;
export declare function forkRepository(owner: string, repo: string, organization?: string): Promise<{
    name: string;
    id: number;
    node_id: string;
    url: string;
    html_url: string;
    full_name: string;
    private: boolean;
    owner: {
        type: string;
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        url: string;
        html_url: string;
    };
    description: string | null;
    fork: boolean;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    default_branch: string;
    parent: {
        name: string;
        id: number;
        node_id: string;
        url: string;
        html_url: string;
        full_name: string;
        private: boolean;
        owner: {
            type: string;
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            url: string;
            html_url: string;
        };
        description: string | null;
        fork: boolean;
        created_at: string;
        updated_at: string;
        pushed_at: string;
        git_url: string;
        ssh_url: string;
        clone_url: string;
        default_branch: string;
    };
    source: {
        name: string;
        id: number;
        node_id: string;
        url: string;
        html_url: string;
        full_name: string;
        private: boolean;
        owner: {
            type: string;
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            url: string;
            html_url: string;
        };
        description: string | null;
        fork: boolean;
        created_at: string;
        updated_at: string;
        pushed_at: string;
        git_url: string;
        ssh_url: string;
        clone_url: string;
        default_branch: string;
    };
}>;
