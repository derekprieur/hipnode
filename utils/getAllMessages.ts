export const getAllMessages = async (
    setMessages: (messages: Message[]) => void
) => {
    const response = await fetch('http://localhost:3000/api/messages')
    const data = await response.json()
    setMessages(data)
}