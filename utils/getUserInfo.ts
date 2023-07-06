export const getUserInfo = async (userId: string, setUserInfo: React.Dispatch<React.SetStateAction<User>>) => {
    try {
      const response = await fetch(`/api/users/${userId}`)
      const data = await response.json()
      if (data != undefined) {
        if(data.notifications) {
          data.notifications = data.notifications.reverse()
        }
      }
          setUserInfo(data)
        } catch (error) {
      // handle error
    }
  }