import { z } from "zod";
import { GitHubReferenceSchema } from "../common/types.js";
export declare const CreateBranchOptionsSchema: z.ZodObject<{
    ref: z.ZodString;
    sha: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sha: string;
    ref: string;
}, {
    sha: string;
    ref: string;
}>;
export declare const CreateBranchSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    branch: z.ZodString;
    from_branch: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    owner: string;
    repo: string;
    branch: string;
    from_branch?: string | undefined;
}, {
    owner: string;
    repo: string;
    branch: string;
    from_branch?: string | undefined;
}>;
export type CreateBranchOptions = z.infer<typeof CreateBranchOptionsSchema>;
export declare function getDefaultBranchSHA(owner: string, repo: string): Promise<string>;
export declare function createBranch(owner: string, repo: string, options: CreateBranchOptions): Promise<z.infer<typeof GitHubReferenceSchema>>;
export declare function getBranchSHA(owner: string, repo: string, branch: string): Promise<string>;
export declare function createBranchFromRef(owner: string, repo: string, newBranch: string, fromBranch?: string): Promise<z.infer<typeof GitHubReferenceSchema>>;
export declare function updateBranch(owner: string, repo: string, branch: string, sha: string): Promise<z.infer<typeof GitHubReferenceSchema>>;
