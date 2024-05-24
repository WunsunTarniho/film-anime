export async function getAnime(resource, query) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    
    return await response.json();
}

export async function getNestedAnime(resource, objectProp) {
    const response = await getAnime(resource);
    return response.data.flatMap(item => item[objectProp]);
}

export function reproduceAnime(recommended, sum) {
    let randomRange = ~~(Math.random() * (recommended.length - sum))
    return { data: recommended.slice(randomRange, randomRange + sum) };
}