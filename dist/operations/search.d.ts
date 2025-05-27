import { z } from "zod";
export declare const SearchOptions: z.ZodObject<{
    q: z.ZodString;
    order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    page: z.ZodOptional<z.ZodNumber>;
    per_page: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    q: string;
    page?: number | undefined;
    per_page?: number | undefined;
    order?: "asc" | "desc" | undefined;
}, {
    q: string;
    page?: number | undefined;
    per_page?: number | undefined;
    order?: "asc" | "desc" | undefined;
}>;
export declare const SearchUsersOptions: z.ZodObject<{
    q: z.ZodString;
    order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    page: z.ZodOptional<z.ZodNumber>;
    per_page: z.ZodOptional<z.ZodNumber>;
} & {
    sort: z.ZodOptional<z.ZodEnum<["followers", "repositories", "joined"]>>;
}, "strip", z.ZodTypeAny, {
    q: string;
    sort?: "followers" | "repositories" | "joined" | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
    order?: "asc" | "desc" | undefined;
}, {
    q: string;
    sort?: "followers" | "repositories" | "joined" | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
    order?: "asc" | "desc" | undefined;
}>;
export declare const SearchIssuesOptions: z.ZodObject<{
    q: z.ZodString;
    order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    page: z.ZodOptional<z.ZodNumber>;
    per_page: z.ZodOptional<z.ZodNumber>;
} & {
    sort: z.ZodOptional<z.ZodEnum<["comments", "reactions", "reactions-+1", "reactions--1", "reactions-smile", "reactions-thinking_face", "reactions-heart", "reactions-tada", "interactions", "created", "updated"]>>;
}, "strip", z.ZodTypeAny, {
    q: string;
    sort?: "comments" | "created" | "updated" | "reactions" | "reactions-+1" | "reactions--1" | "reactions-smile" | "reactions-thinking_face" | "reactions-heart" | "reactions-tada" | "interactions" | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
    order?: "asc" | "desc" | undefined;
}, {
    q: string;
    sort?: "comments" | "created" | "updated" | "reactions" | "reactions-+1" | "reactions--1" | "reactions-smile" | "reactions-thinking_face" | "reactions-heart" | "reactions-tada" | "interactions" | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
    order?: "asc" | "desc" | undefined;
}>;
export declare const SearchCodeSchema: z.ZodObject<{
    q: z.ZodString;
    order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    page: z.ZodOptional<z.ZodNumber>;
    per_page: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    q: string;
    page?: number | undefined;
    per_page?: number | undefined;
    order?: "asc" | "desc" | undefined;
}, {
    q: string;
    page?: number | undefined;
    per_page?: number | undefined;
    order?: "asc" | "desc" | undefined;
}>;
export declare const SearchUsersSchema: z.ZodObject<{
    q: z.ZodString;
    order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    page: z.ZodOptional<z.ZodNumber>;
    per_page: z.ZodOptional<z.ZodNumber>;
} & {
    sort: z.ZodOptional<z.ZodEnum<["followers", "repositories", "joined"]>>;
}, "strip", z.ZodTypeAny, {
    q: string;
    sort?: "followers" | "repositories" | "joined" | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
    order?: "asc" | "desc" | undefined;
}, {
    q: string;
    sort?: "followers" | "repositories" | "joined" | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
    order?: "asc" | "desc" | undefined;
}>;
export declare const SearchIssuesSchema: z.ZodObject<{
    q: z.ZodString;
    order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    page: z.ZodOptional<z.ZodNumber>;
    per_page: z.ZodOptional<z.ZodNumber>;
} & {
    sort: z.ZodOptional<z.ZodEnum<["comments", "reactions", "reactions-+1", "reactions--1", "reactions-smile", "reactions-thinking_face", "reactions-heart", "reactions-tada", "interactions", "created", "updated"]>>;
}, "strip", z.ZodTypeAny, {
    q: string;
    sort?: "comments" | "created" | "updated" | "reactions" | "reactions-+1" | "reactions--1" | "reactions-smile" | "reactions-thinking_face" | "reactions-heart" | "reactions-tada" | "interactions" | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
    order?: "asc" | "desc" | undefined;
}, {
    q: string;
    sort?: "comments" | "created" | "updated" | "reactions" | "reactions-+1" | "reactions--1" | "reactions-smile" | "reactions-thinking_face" | "reactions-heart" | "reactions-tada" | "interactions" | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
    order?: "asc" | "desc" | undefined;
}>;
export declare function searchCode(params: z.infer<typeof SearchCodeSchema>): Promise<unknown>;
export declare function searchIssues(params: z.infer<typeof SearchIssuesSchema>): Promise<unknown>;
export declare function searchUsers(params: z.infer<typeof SearchUsersSchema>): Promise<unknown>;
