import { createContext, ReactNode, useContext, useReducer } from "react";
import { User } from "firebase/auth";
import { AuthContext } from "./AuthContext";

// Definimos el tipo para el estado inicial
type InitialStateType = {
    chatId: string;
    user: any; 
};

// Definimos el tipo para las acciones del reducer
type ActionType = {
    type: string;
    payload: any;
};

// Definimos el tipo para el contexto
export type ChatContextType = {
    currentUser: User | null;
    dispatch: React.Dispatch<ActionType>;
} & InitialStateType;

// Creamos el contexto
export const ChatContext = createContext<ChatContextType>({
    currentUser: null,
    chatId: "null",
    user: {},
    dispatch: () => {},
});

export const ChatContextProvider = ({ children }: { children: ReactNode }) => {
    const { currentUser } = useContext(AuthContext);

    const chatReducer = (
        state: InitialStateType,
        action: ActionType
    ): InitialStateType => {
        switch (action.type) {
            case "CHANGE_USER":
                return {
                    user: action.payload,
                    chatId: currentUser
                        ? currentUser.uid > action.payload.uid
                            ? currentUser.uid + action.payload.uid
                            : action.payload.uid + currentUser.uid
                        : "null",
                };
            default:
                return state;
        }
    };

    const INITIAL_STATE: InitialStateType = {
        chatId: "null",
        user: {},
    };

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

    return (
        <ChatContext.Provider value={{ ...state, currentUser, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};
