import { z } from "zod";
export declare const GitHubAuthorSchema: z.ZodObject<{
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
export declare const GitHubOwnerSchema: z.ZodObject<{
    login: z.ZodString;
    id: z.ZodNumber;
    node_id: z.ZodString;
    avatar_url: z.ZodString;
    url: z.ZodString;
    html_url: z.ZodString;
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    url: string;
    html_url: string;
}, {
    type: string;
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    url: string;
    html_url: string;
}>;
export declare const GitHubRepositorySchema: z.ZodObject<{
    id: z.ZodNumber;
    node_id: z.ZodString;
    name: z.ZodString;
    full_name: z.ZodString;
    private: z.ZodBoolean;
    owner: z.ZodObject<{
        login: z.ZodString;
        id: z.ZodNumber;
        node_id: z.ZodString;
        avatar_url: z.ZodString;
        url: z.ZodString;
        html_url: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        url: string;
        html_url: string;
    }, {
        type: string;
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        url: string;
        html_url: string;
    }>;
    html_url: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    fork: z.ZodBoolean;
    url: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    pushed_at: z.ZodString;
    git_url: z.ZodString;
    ssh_url: z.ZodString;
    clone_url: z.ZodString;
    default_branch: z.ZodString;
}, "strip", z.ZodTypeAny, {
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
}, {
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
export declare const GithubFileContentLinks: z.ZodObject<{
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
export declare const GitHubFileContentSchema: z.ZodObject<{
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
}>;
export declare const GitHubDirectoryContentSchema: z.ZodObject<{
    type: z.ZodString;
    size: z.ZodNumber;
    name: z.ZodString;
    path: z.ZodString;
    sha: z.ZodString;
    url: z.ZodString;
    git_url: z.ZodString;
    html_url: z.ZodString;
    download_url: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    path: string;
    type: string;
    url: string;
    html_url: string;
    git_url: string;
    sha: string;
    size: number;
    download_url: string | null;
}, {
    name: string;
    path: string;
    type: string;
    url: string;
    html_url: string;
    git_url: string;
    sha: string;
    size: number;
    download_url: string | null;
}>;
export declare const GitHubContentSchema: z.ZodUnion<[z.ZodObject<{
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
}>, z.ZodArray<z.ZodObject<{
    type: z.ZodString;
    size: z.ZodNumber;
    name: z.ZodString;
    path: z.ZodString;
    sha: z.ZodString;
    url: z.ZodString;
    git_url: z.ZodString;
    html_url: z.ZodString;
    download_url: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    path: string;
    type: string;
    url: string;
    html_url: string;
    git_url: string;
    sha: string;
    size: number;
    download_url: string | null;
}, {
    name: string;
    path: string;
    type: string;
    url: string;
    html_url: string;
    git_url: string;
    sha: string;
    size: number;
    download_url: string | null;
}>, "many">]>;
export declare const GitHubTreeEntrySchema: z.ZodObject<{
    path: z.ZodString;
    mode: z.ZodEnum<["100644", "100755", "040000", "160000", "120000"]>;
    type: z.ZodEnum<["blob", "tree", "commit"]>;
    size: z.ZodOptional<z.ZodNumber>;
    sha: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    path: string;
    type: "blob" | "tree" | "commit";
    url: string;
    sha: string;
    mode: "100644" | "100755" | "040000" | "160000" | "120000";
    size?: number | undefined;
}, {
    path: string;
    type: "blob" | "tree" | "commit";
    url: string;
    sha: string;
    mode: "100644" | "100755" | "040000" | "160000" | "120000";
    size?: number | undefined;
}>;
export declare const GitHubTreeSchema: z.ZodObject<{
    sha: z.ZodString;
    url: z.ZodString;
    tree: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        mode: z.ZodEnum<["100644", "100755", "040000", "160000", "120000"]>;
        type: z.ZodEnum<["blob", "tree", "commit"]>;
        size: z.ZodOptional<z.ZodNumber>;
        sha: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        type: "blob" | "tree" | "commit";
        url: string;
        sha: string;
        mode: "100644" | "100755" | "040000" | "160000" | "120000";
        size?: number | undefined;
    }, {
        path: string;
        type: "blob" | "tree" | "commit";
        url: string;
        sha: string;
        mode: "100644" | "100755" | "040000" | "160000" | "120000";
        size?: number | undefined;
    }>, "many">;
    truncated: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    url: string;
    sha: string;
    tree: {
        path: string;
        type: "blob" | "tree" | "commit";
        url: string;
        sha: string;
        mode: "100644" | "100755" | "040000" | "160000" | "120000";
        size?: number | undefined;
    }[];
    truncated: boolean;
}, {
    url: string;
    sha: string;
    tree: {
        path: string;
        type: "blob" | "tree" | "commit";
        url: string;
        sha: string;
        mode: "100644" | "100755" | "040000" | "160000" | "120000";
        size?: number | undefined;
    }[];
    truncated: boolean;
}>;
export declare const GitHubCommitSchema: z.ZodObject<{
    sha: z.ZodString;
    node_id: z.ZodString;
    url: z.ZodString;
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
    }, "strip", z.ZodTypeAny, {
        url: string;
        sha: string;
    }, {
        url: string;
        sha: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    message: string;
    node_id: string;
    url: string;
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
        sha: string;
    }[];
}, {
    message: string;
    node_id: string;
    url: string;
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
        sha: string;
    }[];
}>;
export declare const GitHubListCommitsSchema: z.ZodArray<z.ZodObject<{
    sha: z.ZodString;
    node_id: z.ZodString;
    commit: z.ZodObject<{
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
        url: z.ZodString;
        comment_count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        message: string;
        url: string;
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
        comment_count: number;
    }, {
        message: string;
        url: string;
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
        comment_count: number;
    }>;
    url: z.ZodString;
    html_url: z.ZodString;
    comments_url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    node_id: string;
    url: string;
    html_url: string;
    sha: string;
    commit: {
        message: string;
        url: string;
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
        comment_count: number;
    };
    comments_url: string;
}, {
    node_id: string;
    url: string;
    html_url: string;
    sha: string;
    commit: {
        message: string;
        url: string;
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
        comment_count: number;
    };
    comments_url: string;
}>, "many">;
export declare const GitHubReferenceSchema: z.ZodObject<{
    ref: z.ZodString;
    node_id: z.ZodString;
    url: z.ZodString;
    object: z.ZodObject<{
        sha: z.ZodString;
        type: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        url: string;
        sha: string;
    }, {
        type: string;
        url: string;
        sha: string;
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
        type: string;
        url: string;
        sha: string;
    };
    node_id: string;
    url: string;
    ref: string;
}, {
    object: {
        type: string;
        url: string;
        sha: string;
    };
    node_id: string;
    url: string;
    ref: string;
}>;
export declare const GitHubIssueAssigneeSchema: z.ZodObject<{
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
export declare const GitHubLabelSchema: z.ZodObject<{
    id: z.ZodNumber;
    node_id: z.ZodString;
    url: z.ZodString;
    name: z.ZodString;
    color: z.ZodString;
    default: z.ZodBoolean;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    node_id: string;
    url: string;
    color: string;
    default: boolean;
    description?: string | null | undefined;
}, {
    name: string;
    id: number;
    node_id: string;
    url: string;
    color: string;
    default: boolean;
    description?: string | null | undefined;
}>;
export declare const GitHubMilestoneSchema: z.ZodObject<{
    url: z.ZodString;
    html_url: z.ZodString;
    labels_url: z.ZodString;
    id: z.ZodNumber;
    node_id: z.ZodString;
    number: z.ZodNumber;
    title: z.ZodString;
    description: z.ZodString;
    state: z.ZodString;
}, "strip", z.ZodTypeAny, {
    number: number;
    id: number;
    node_id: string;
    url: string;
    html_url: string;
    description: string;
    labels_url: string;
    title: string;
    state: string;
}, {
    number: number;
    id: number;
    node_id: string;
    url: string;
    html_url: string;
    description: string;
    labels_url: string;
    title: string;
    state: string;
}>;
export declare const GitHubIssueSchema: z.ZodObject<{
    url: z.ZodString;
    repository_url: z.ZodString;
    labels_url: z.ZodString;
    comments_url: z.ZodString;
    events_url: z.ZodString;
    html_url: z.ZodString;
    id: z.ZodNumber;
    node_id: z.ZodString;
    number: z.ZodNumber;
    title: z.ZodString;
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
    labels: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        node_id: z.ZodString;
        url: z.ZodString;
        name: z.ZodString;
        color: z.ZodString;
        default: z.ZodBoolean;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: number;
        node_id: string;
        url: string;
        color: string;
        default: boolean;
        description?: string | null | undefined;
    }, {
        name: string;
        id: number;
        node_id: string;
        url: string;
        color: string;
        default: boolean;
        description?: string | null | undefined;
    }>, "many">;
    state: z.ZodString;
    locked: z.ZodBoolean;
    assignee: z.ZodNullable<z.ZodObject<{
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
    }>>;
    assignees: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    milestone: z.ZodNullable<z.ZodObject<{
        url: z.ZodString;
        html_url: z.ZodString;
        labels_url: z.ZodString;
        id: z.ZodNumber;
        node_id: z.ZodString;
        number: z.ZodNumber;
        title: z.ZodString;
        description: z.ZodString;
        state: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        number: number;
        id: number;
        node_id: string;
        url: string;
        html_url: string;
        description: string;
        labels_url: string;
        title: string;
        state: string;
    }, {
        number: number;
        id: number;
        node_id: string;
        url: string;
        html_url: string;
        description: string;
        labels_url: string;
        title: string;
        state: string;
    }>>;
    comments: z.ZodNumber;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    closed_at: z.ZodNullable<z.ZodString>;
    body: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    number: number;
    id: number;
    node_id: string;
    url: string;
    html_url: string;
    created_at: string;
    updated_at: string;
    comments_url: string;
    labels_url: string;
    title: string;
    state: string;
    repository_url: string;
    events_url: string;
    user: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    };
    labels: {
        name: string;
        id: number;
        node_id: string;
        url: string;
        color: string;
        default: boolean;
        description?: string | null | undefined;
    }[];
    locked: boolean;
    assignee: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    } | null;
    assignees: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    }[];
    milestone: {
        number: number;
        id: number;
        node_id: string;
        url: string;
        html_url: string;
        description: string;
        labels_url: string;
        title: string;
        state: string;
    } | null;
    comments: number;
    closed_at: string | null;
    body: string | null;
}, {
    number: number;
    id: number;
    node_id: string;
    url: string;
    html_url: string;
    created_at: string;
    updated_at: string;
    comments_url: string;
    labels_url: string;
    title: string;
    state: string;
    repository_url: string;
    events_url: string;
    user: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    };
    labels: {
        name: string;
        id: number;
        node_id: string;
        url: string;
        color: string;
        default: boolean;
        description?: string | null | undefined;
    }[];
    locked: boolean;
    assignee: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    } | null;
    assignees: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    }[];
    milestone: {
        number: number;
        id: number;
        node_id: string;
        url: string;
        html_url: string;
        description: string;
        labels_url: string;
        title: string;
        state: string;
    } | null;
    comments: number;
    closed_at: string | null;
    body: string | null;
}>;
export declare const GitHubSearchResponseSchema: z.ZodObject<{
    total_count: z.ZodNumber;
    incomplete_results: z.ZodBoolean;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        node_id: z.ZodString;
        name: z.ZodString;
        full_name: z.ZodString;
        private: z.ZodBoolean;
        owner: z.ZodObject<{
            login: z.ZodString;
            id: z.ZodNumber;
            node_id: z.ZodString;
            avatar_url: z.ZodString;
            url: z.ZodString;
            html_url: z.ZodString;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            url: string;
            html_url: string;
        }, {
            type: string;
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            url: string;
            html_url: string;
        }>;
        html_url: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        fork: z.ZodBoolean;
        url: z.ZodString;
        created_at: z.ZodString;
        updated_at: z.ZodString;
        pushed_at: z.ZodString;
        git_url: z.ZodString;
        ssh_url: z.ZodString;
        clone_url: z.ZodString;
        default_branch: z.ZodString;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
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
}, {
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
export declare const GitHubPullRequestRefSchema: z.ZodObject<{
    label: z.ZodString;
    ref: z.ZodString;
    sha: z.ZodString;
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
    repo: z.ZodObject<{
        id: z.ZodNumber;
        node_id: z.ZodString;
        name: z.ZodString;
        full_name: z.ZodString;
        private: z.ZodBoolean;
        owner: z.ZodObject<{
            login: z.ZodString;
            id: z.ZodNumber;
            node_id: z.ZodString;
            avatar_url: z.ZodString;
            url: z.ZodString;
            html_url: z.ZodString;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            url: string;
            html_url: string;
        }, {
            type: string;
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            url: string;
            html_url: string;
        }>;
        html_url: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        fork: z.ZodBoolean;
        url: z.ZodString;
        created_at: z.ZodString;
        updated_at: z.ZodString;
        pushed_at: z.ZodString;
        git_url: z.ZodString;
        ssh_url: z.ZodString;
        clone_url: z.ZodString;
        default_branch: z.ZodString;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
}, "strip", z.ZodTypeAny, {
    sha: string;
    ref: string;
    user: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    };
    label: string;
    repo: {
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
}, {
    sha: string;
    ref: string;
    user: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    };
    label: string;
    repo: {
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
export declare const GitHubPullRequestSchema: z.ZodObject<{
    url: z.ZodString;
    id: z.ZodNumber;
    node_id: z.ZodString;
    html_url: z.ZodString;
    diff_url: z.ZodString;
    patch_url: z.ZodString;
    issue_url: z.ZodString;
    number: z.ZodNumber;
    state: z.ZodString;
    locked: z.ZodBoolean;
    title: z.ZodString;
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
    created_at: z.ZodString;
    updated_at: z.ZodString;
    closed_at: z.ZodNullable<z.ZodString>;
    merged_at: z.ZodNullable<z.ZodString>;
    merge_commit_sha: z.ZodNullable<z.ZodString>;
    assignee: z.ZodNullable<z.ZodObject<{
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
    }>>;
    assignees: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    requested_reviewers: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    labels: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        node_id: z.ZodString;
        url: z.ZodString;
        name: z.ZodString;
        color: z.ZodString;
        default: z.ZodBoolean;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: number;
        node_id: string;
        url: string;
        color: string;
        default: boolean;
        description?: string | null | undefined;
    }, {
        name: string;
        id: number;
        node_id: string;
        url: string;
        color: string;
        default: boolean;
        description?: string | null | undefined;
    }>, "many">;
    head: z.ZodObject<{
        label: z.ZodString;
        ref: z.ZodString;
        sha: z.ZodString;
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
        repo: z.ZodObject<{
            id: z.ZodNumber;
            node_id: z.ZodString;
            name: z.ZodString;
            full_name: z.ZodString;
            private: z.ZodBoolean;
            owner: z.ZodObject<{
                login: z.ZodString;
                id: z.ZodNumber;
                node_id: z.ZodString;
                avatar_url: z.ZodString;
                url: z.ZodString;
                html_url: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                url: string;
                html_url: string;
            }, {
                type: string;
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                url: string;
                html_url: string;
            }>;
            html_url: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            fork: z.ZodBoolean;
            url: z.ZodString;
            created_at: z.ZodString;
            updated_at: z.ZodString;
            pushed_at: z.ZodString;
            git_url: z.ZodString;
            ssh_url: z.ZodString;
            clone_url: z.ZodString;
            default_branch: z.ZodString;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
    }, "strip", z.ZodTypeAny, {
        sha: string;
        ref: string;
        user: {
            login: string;
            id: number;
            avatar_url: string;
            url: string;
            html_url: string;
        };
        label: string;
        repo: {
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
    }, {
        sha: string;
        ref: string;
        user: {
            login: string;
            id: number;
            avatar_url: string;
            url: string;
            html_url: string;
        };
        label: string;
        repo: {
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
    base: z.ZodObject<{
        label: z.ZodString;
        ref: z.ZodString;
        sha: z.ZodString;
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
        repo: z.ZodObject<{
            id: z.ZodNumber;
            node_id: z.ZodString;
            name: z.ZodString;
            full_name: z.ZodString;
            private: z.ZodBoolean;
            owner: z.ZodObject<{
                login: z.ZodString;
                id: z.ZodNumber;
                node_id: z.ZodString;
                avatar_url: z.ZodString;
                url: z.ZodString;
                html_url: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                url: string;
                html_url: string;
            }, {
                type: string;
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                url: string;
                html_url: string;
            }>;
            html_url: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            fork: z.ZodBoolean;
            url: z.ZodString;
            created_at: z.ZodString;
            updated_at: z.ZodString;
            pushed_at: z.ZodString;
            git_url: z.ZodString;
            ssh_url: z.ZodString;
            clone_url: z.ZodString;
            default_branch: z.ZodString;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
    }, "strip", z.ZodTypeAny, {
        sha: string;
        ref: string;
        user: {
            login: string;
            id: number;
            avatar_url: string;
            url: string;
            html_url: string;
        };
        label: string;
        repo: {
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
    }, {
        sha: string;
        ref: string;
        user: {
            login: string;
            id: number;
            avatar_url: string;
            url: string;
            html_url: string;
        };
        label: string;
        repo: {
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
}, "strip", z.ZodTypeAny, {
    number: number;
    id: number;
    node_id: string;
    url: string;
    html_url: string;
    created_at: string;
    updated_at: string;
    title: string;
    state: string;
    user: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    };
    labels: {
        name: string;
        id: number;
        node_id: string;
        url: string;
        color: string;
        default: boolean;
        description?: string | null | undefined;
    }[];
    locked: boolean;
    assignee: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    } | null;
    assignees: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    }[];
    closed_at: string | null;
    body: string | null;
    diff_url: string;
    patch_url: string;
    issue_url: string;
    merged_at: string | null;
    merge_commit_sha: string | null;
    requested_reviewers: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    }[];
    head: {
        sha: string;
        ref: string;
        user: {
            login: string;
            id: number;
            avatar_url: string;
            url: string;
            html_url: string;
        };
        label: string;
        repo: {
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
    };
    base: {
        sha: string;
        ref: string;
        user: {
            login: string;
            id: number;
            avatar_url: string;
            url: string;
            html_url: string;
        };
        label: string;
        repo: {
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
    };
}, {
    number: number;
    id: number;
    node_id: string;
    url: string;
    html_url: string;
    created_at: string;
    updated_at: string;
    title: string;
    state: string;
    user: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    };
    labels: {
        name: string;
        id: number;
        node_id: string;
        url: string;
        color: string;
        default: boolean;
        description?: string | null | undefined;
    }[];
    locked: boolean;
    assignee: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    } | null;
    assignees: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    }[];
    closed_at: string | null;
    body: string | null;
    diff_url: string;
    patch_url: string;
    issue_url: string;
    merged_at: string | null;
    merge_commit_sha: string | null;
    requested_reviewers: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    }[];
    head: {
        sha: string;
        ref: string;
        user: {
            login: string;
            id: number;
            avatar_url: string;
            url: string;
            html_url: string;
        };
        label: string;
        repo: {
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
    };
    base: {
        sha: string;
        ref: string;
        user: {
            login: string;
            id: number;
            avatar_url: string;
            url: string;
            html_url: string;
        };
        label: string;
        repo: {
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
    };
}>;
export type GitHubAuthor = z.infer<typeof GitHubAuthorSchema>;
export type GitHubRepository = z.infer<typeof GitHubRepositorySchema>;
export type GitHubFileContent = z.infer<typeof GitHubFileContentSchema>;
export type GitHubDirectoryContent = z.infer<typeof GitHubDirectoryContentSchema>;
export type GitHubContent = z.infer<typeof GitHubContentSchema>;
export type GitHubTree = z.infer<typeof GitHubTreeSchema>;
export type GitHubCommit = z.infer<typeof GitHubCommitSchema>;
export type GitHubListCommits = z.infer<typeof GitHubListCommitsSchema>;
export type GitHubReference = z.infer<typeof GitHubReferenceSchema>;
export type GitHubIssueAssignee = z.infer<typeof GitHubIssueAssigneeSchema>;
export type GitHubLabel = z.infer<typeof GitHubLabelSchema>;
export type GitHubMilestone = z.infer<typeof GitHubMilestoneSchema>;
export type GitHubIssue = z.infer<typeof GitHubIssueSchema>;
export type GitHubSearchResponse = z.infer<typeof GitHubSearchResponseSchema>;
export type GitHubPullRequest = z.infer<typeof GitHubPullRequestSchema>;
export type GitHubPullRequestRef = z.infer<typeof GitHubPullRequestRefSchema>;
