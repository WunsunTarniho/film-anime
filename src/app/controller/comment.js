class Comment{
    constructor(){
        this.app_url = 'http://localhost:3000';
    }

    async all(req){
        const response = await fetch(`${this.app_url}/api/v1/comment?anime_id=${req.anime_id}`);
        return await response.json();
    }

    async store(req){
        const response = await fetch('/api/v1/comment', {
            method: 'POST',
            body: JSON.stringify(req)
        });

        return await response.json();
    }
}

const comment = new Comment();

export default comment;