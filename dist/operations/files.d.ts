import { z } from "zod";
export declare const FileOperationSchema: z.ZodObject<{
    path: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    path: string;
    content: string;
}, {
    path: string;
    content: string;
}>;
export declare const CreateOrUpdateFileSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    path: z.ZodString;
    content: z.ZodString;
    message: z.ZodString;
    branch: z.ZodString;
    sha: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    path: string;
    message: string;
    owner: string;
    content: string;
    repo: string;
    branch: string;
    sha?: string | undefined;
}, {
    path: string;
    message: string;
    owner: string;
    content: string;
    repo: string;
    branch: string;
    sha?: string | undefined;
}>;
export declare const GetFileContentsSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    path: z.ZodString;
    branch: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    path: string;
    owner: string;
    repo: string;
    branch?: string | undefined;
}, {
    path: string;
    owner: string;
    repo: string;
    branch?: string | undefined;
}>;
export declare const PushFilesSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    branch: z.ZodString;
    files: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        content: string;
    }, {
        path: string;
        content: string;
    }>, "many">;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    owner: string;
    repo: string;
    branch: string;
    files: {
        path: string;
        content: string;
    }[];
}, {
    message: string;
    owner: string;
    repo: string;
    branch: string;
    files: {
        path: string;
        content: string;
    }[];
}>;
export declare const GitHubCreateUpdateFileResponseSchema: z.ZodObject<{
    content: z.ZodNullable<z.ZodObject<{
        name: z.ZodString;
        path: z.ZodString;
        sha: z.ZodString;
        size: z.ZodNumber;
        url: z.ZodString;
        html_url: z.ZodString;
        git_url: z.ZodString;
        download_url: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        encoding: z.ZodOptional<z.ZodString>;
        _links: z.ZodObject<{
            self: z.ZodString;
            git: z.ZodNullable<z.ZodString>;
            html: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            self: string;
            git: string | null;
            html: string | null;
        }, {
            self: string;
            git: string | null;
            html: string | null;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        path: string;
        type: string;
        url: string;
        html_url: string;
        git_url: string;
        sha: string;
        size: number;
        download_url: string;
        _links: {
            self: string;
            git: string | null;
            html: string | null;
        };
        content?: string | undefined;
        encoding?: string | undefined;
    }, {
        name: string;
        path: string;
        type: string;
        url: string;
        html_url: string;
        git_url: string;
        sha: string;
        size: number;
        download_url: string;
        _links: {
            self: string;
            git: string | null;
            html: string | null;
        };
        content?: string | undefined;
        encoding?: string | undefined;
    }>>;
    commit: z.ZodObject<{
        sha: z.ZodString;
        node_id: z.ZodString;
        url: z.ZodString;
        html_url: z.ZodString;
        author: z.ZodObject<{
            name: z.ZodString;
            email: z.ZodString;
            date: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            email: string;
            date: string;
        }, {
            name: string;
            email: string;
            date: string;
        }>;
        committer: z.ZodObject<{
            name: z.ZodString;
            email: z.ZodString;
            date: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            email: string;
            date: string;
        }, {
            name: string;
            email: string;
            date: string;
        }>;
        message: z.ZodString;
        tree: z.ZodObject<{
            sha: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
            sha: string;
        }, {
            url: string;
            sha: string;
        }>;
        parents: z.ZodArray<z.ZodObject<{
            sha: z.ZodString;
            url: z.ZodString;
            html_url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
            html_url: string;
            sha: string;
        }, {
            url: string;
            html_url: string;
            sha: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        message: string;
        node_id: string;
        url: string;
        html_url: string;
        sha: string;
        tree: {
            url: string;
            sha: string;
        };
        author: {
            name: string;
            email: string;
            date: string;
        };
        committer: {
            name: string;
            email: string;
            date: string;
        };
        parents: {
            url: string;
            html_url: string;
            sha: string;
        }[];
    }, {
        message: string;
        node_id: string;
        url: string;
        html_url: string;
        sha: string;
        tree: {
            url: string;
            sha: string;
        };
        author: {
            name: string;
            email: string;
            date: string;
        };
        committer: {
            name: string;
            email: string;
            date: string;
        };
        parents: {
            url: string;
            html_url: string;
            sha: string;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    content: {
        name: string;
        path: string;
        type: string;
        url: string;
        html_url: string;
        git_url: string;
        sha: string;
        size: number;
        download_url: string;
        _links: {
            self: string;
            git: string | null;
            html: string | null;
        };
        content?: string | undefined;
        encoding?: string | undefined;
    } | null;
    commit: {
        message: string;
        node_id: string;
        url: string;
        html_url: string;
        sha: string;
        tree: {
            url: string;
            sha: string;
        };
        author: {
            name: string;
            email: string;
            date: string;
        };
        committer: {
            name: string;
            email: string;
            date: string;
        };
        parents: {
            url: string;
            html_url: string;
            sha: string;
        }[];
    };
}, {
    content: {
        name: string;
        path: string;
        type: string;
        url: string;
        html_url: string;
        git_url: string;
        sha: string;
        size: number;
        download_url: string;
        _links: {
            self: string;
            git: string | null;
            html: string | null;
        };
        content?: string | undefined;
        encoding?: string | undefined;
    } | null;
    commit: {
        message: string;
        node_id: string;
        url: string;
        html_url: string;
        sha: string;
        tree: {
            url: string;
            sha: string;
        };
        author: {
            name: string;
            email: string;
            date: string;
        };
        committer: {
            name: string;
            email: string;
            date: string;
        };
        parents: {
            url: string;
            html_url: string;
            sha: string;
        }[];
    };
}>;
export type FileOperation = z.infer<typeof FileOperationSchema>;
export type GitHubCreateUpdateFileResponse = z.infer<typeof GitHubCreateUpdateFileResponseSchema>;
export declare function getFileContents(owner: string, repo: string, path: string, branch?: string): Promise<{
    name: string;
    path: string;
    type: string;
    url: string;
    html_url: string;
    git_url: string;
    sha: string;
    size: number;
    download_url: string;
    _links: {
        self: string;
        git: string | null;
        html: string | null;
    };
    content?: string | undefined;
    encoding?: string | undefined;
} | {
    name: string;
    path: string;
    type: string;
    url: string;
    html_url: string;
    git_url: string;
    sha: string;
    size: number;
    download_url: string | null;
}[]>;
export declare function createOrUpdateFile(owner: string, repo: string, path: string, content: string, message: string, branch: string, sha?: string): Promise<{
    content: {
        name: string;
        path: string;
        type: string;
        url: string;
        html_url: string;
        git_url: string;
        sha: string;
        size: number;
        download_url: string;
        _links: {
            self: string;
            git: string | null;
            html: string | null;
        };
        content?: string | undefined;
        encoding?: string | undefined;
    } | null;
    commit: {
        message: string;
        node_id: string;
        url: string;
        html_url: string;
        sha: string;
        tree: {
            url: string;
            sha: string;
        };
        author: {
            name: string;
            email: string;
            date: string;
        };
        committer: {
            name: string;
            email: string;
            date: string;
        };
        parents: {
            url: string;
            html_url: string;
            sha: string;
        }[];
    };
}>;
export declare function pushFiles(owner: string, repo: string, branch: string, files: FileOperation[], message: string): Promise<{
    object: {
        type: string;
        url: string;
        sha: string;
    };
    node_id: string;
    url: string;
    ref: string;
}>;
