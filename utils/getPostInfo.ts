export const getPostInfo = async (id: string, setPostInfo: any) => {
    try {
        const response = await fetch(`/api/posts/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        setPostInfo(data);
    } catch (error) {
        // handle error
    }
}