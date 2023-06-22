import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface NewMessageState {
    message: string;
    messageThread: Message;
    userToMessage: User;
  }

  const initialState: NewMessageState = {
    message: '',
    messageThread: {user1: '', user2: '', _id: '', messages: [{sender: '', message: '', date: '', _id: ''}]},
    userToMessage: { name: '', username: '', email: '', image: '', description: '', following: [''], favorites: [''], followers: [''], _id: '', createdAt: '',
    }
  }

export const newMessageSlice = createSlice({
    name: 'newMessage',
    initialState,
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        setMessageThread: (state, action: PayloadAction<Message>) => {
            state.messageThread = action.payload;
        },
        setUserToMessage: (state, action: PayloadAction<User>) => {
            state.userToMessage = action.payload;
        }
    }
});

export const { setMessage, setMessageThread, setUserToMessage } = newMessageSlice.actions;

export default newMessageSlice.reducer;