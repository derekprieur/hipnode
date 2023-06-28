export const getPostInfo = async (id: string, setPostInfo: any) => {
    console.log('testing')
    try {
        console.log(id, 'id');
        const response = await fetch(`/api/posts/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        console.log(data, 'data')
        setPostInfo(data);
    } catch (error) {
        // handle error
    }
}