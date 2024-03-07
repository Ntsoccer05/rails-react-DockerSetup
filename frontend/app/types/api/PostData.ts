export type PostData = {
    id: number,
    user_id?: number,
    tag_id?: number,
    category_id?: number,
    content: string,
    title: string,
    can_post: boolean,
    posted_at?: string,
    created_at?: string,
    updated_at?: string
}