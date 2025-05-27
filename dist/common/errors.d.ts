export declare class GitHubError extends Error {
    readonly status: number;
    readonly response: unknown;
    constructor(message: string, status: number, response: unknown);
}
export declare class GitHubValidationError extends GitHubError {
    constructor(message: string, status: number, response: unknown);
}
export declare class GitHubResourceNotFoundError extends GitHubError {
    constructor(resource: string);
}
export declare class GitHubAuthenticationError extends GitHubError {
    constructor(message?: string);
}
export declare class GitHubPermissionError extends GitHubError {
    constructor(message?: string);
}
export declare class GitHubRateLimitError extends GitHubError {
    readonly resetAt: Date;
    constructor(message: string | undefined, resetAt: Date);
}
export declare class GitHubConflictError extends GitHubError {
    constructor(message: string);
}
export declare function isGitHubError(error: unknown): error is GitHubError;
export declare function createGitHubError(status: number, response: any): GitHubError;
