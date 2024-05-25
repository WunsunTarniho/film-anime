class Collection {
    static async all(req) {
        const response = await fetch(`/api/v1/collection?user_id=${req.user_id}`);
        return await response.json();
    }

    static async store(req) {
        const response = await fetch(`/api/v1/collection`, {
            method: 'POST',
            body: JSON.stringify(req),
        });

        return await response.json();
    }

    static async show(req) {
        const response = await fetch(`/api/v1/collection?mal_id=${req.mal_id}`);
        return await response.json();
    }

    static async destroy(req) {
        const response = await fetch(`/api/v1/collection/${req.id}`, {
            method: 'DELETE',
        });

        const data = await response.json();
        return data;
    }
}

export default Collection;