import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "firebase/auth";

type InitialStateType = {
    chatId: string;
    user: User;
};

type ActionType = {
    type: string;
    payload: any;
};

export type ChatContextType = {
    dispatch: React.Dispatch<ActionType>;
    data: InitialStateType;
};

export const ChatContext = createContext<ChatContextType>({
    dispatch: () => {},
    data: {
        chatId: "null",
        user: {} as User,
    },
});

export const ChatContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { currentUser } = useContext(AuthContext);

    const INITIAL_STATE = {
        chatId: "null",
        user: currentUser || ({} as User),
    };

    const chatReducer = (state: InitialStateType, action: ActionType) => {
        switch (action.type) {
            case "CHANGE_USER":
                return {
                    user: action.payload,
                    chatId:
                        currentUser && action.payload.uid
                            ? currentUser.uid > action.payload.uid
                                ? currentUser.uid + action.payload.uid
                                : action.payload.uid + currentUser.uid
                            : "null",
                };

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

    return (
        <ChatContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};
