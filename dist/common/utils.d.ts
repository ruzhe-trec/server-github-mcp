type RequestOptions = {
    method?: string;
    body?: unknown;
    headers?: Record<string, string>;
};
export declare function buildUrl(baseUrl: string, params: Record<string, string | number | undefined>): string;
export declare function githubRequest(url: string, options?: RequestOptions): Promise<unknown>;
export declare function validateBranchName(branch: string): string;
export declare function validateRepositoryName(name: string): string;
export declare function validateOwnerName(owner: string): string;
export declare function checkBranchExists(owner: string, repo: string, branch: string): Promise<boolean>;
export declare function checkUserExists(username: string): Promise<boolean>;
export {};
