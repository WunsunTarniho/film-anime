class Comment {
    static async all(req) {
        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/v1/comment?anime_id=${req.anime_id}`);
        return await response.json();
    }

    static async store(req) {
        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/v1/comment`, {
            method: 'POST',
            body: JSON.stringify(req)
        });

        return await response.json();
    }
}

export default Comment;