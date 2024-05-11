import { SearchContainer } from "./Search.styles";

const Search = () => (
    <SearchContainer>
        <div className="searchForm">
            <input type="text" placeholder="Find a user" />
        </div>
        <div className="userChat">
            <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-olly-774909.jpg&fm=jpg"
                alt="userImg"
            />
            <div className="userChatInfo">
                <span>Jane</span>
            </div>
        </div>
    </SearchContainer>
);

export default Search;
