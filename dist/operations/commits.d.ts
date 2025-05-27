import { z } from "zod";
export declare const ListCommitsSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    sha: z.ZodOptional<z.ZodString>;
    page: z.ZodOptional<z.ZodNumber>;
    perPage: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    owner: string;
    repo: string;
    sha?: string | undefined;
    page?: number | undefined;
    perPage?: number | undefined;
}, {
    owner: string;
    repo: string;
    sha?: string | undefined;
    page?: number | undefined;
    perPage?: number | undefined;
}>;
export declare function listCommits(owner: string, repo: string, page?: number, perPage?: number, sha?: string): Promise<unknown>;
