const API_PASSWORD = process.env.REACT_APP_POKEMONTCG_API_KEY || '';
const API_URL = process.env.REACT_APP_POKEMONTCG_API_URL;

export async function fetchCards(page: number) {

    const params = new URLSearchParams({
        pageSize: '10',
        orderBy: 'name',
        page: page.toString(),
    });

    const url = `${API_URL}?${params}`

    const headers = {
        Authorization: API_PASSWORD
    };
    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`Request failed: ${response.statusText}`);
        }
        const cards = await response.json();
        return cards.data;
    } catch (error) {
        console.error("Request failed:", error);
        throw error;
    }
}

export async function fetchCard(id: string) {

    const params = new URLSearchParams({
        page: '1',
        pageSize: '10',
        orderBy: 'name',
    });

    const url = `${API_URL}/${id}?${params}`

    const headers = {
        Authorization: API_PASSWORD
    };

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`Request failed: ${response.statusText}`);
        }
        const card = await response.json();
        return card.data;
    } catch (error) {
        console.error("Request failed:", error);
        throw error;
    }
}

export async function searchCards(name: string) {

    const params = new URLSearchParams({
        page: '1',
        pageSize: '10',
        orderBy: 'name',
        q: `name:${name}`
    });

    const url = `${API_URL}?${params}`

    const headers = {
        Authorization: API_PASSWORD
    };

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`Request failed: ${response.statusText}`);
        }
        const cards = await response.json();
        return cards.data;
    } catch (error) {
        console.error("Request failed:", error);
        throw error;
    }
}
