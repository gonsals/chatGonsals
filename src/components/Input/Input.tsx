import { InputContainer } from "./Input.styles";
import Img from "../../img/img.png";
import Attach from "../../img/attach.png";

const Input = () => (
    <InputContainer>
        <input type="text" placeholder="Type something..." />
        <div className="send">
            <img src={Attach} alt="" />
            <input type="file" style={{ display: "none" }} id="file" />
            <label htmlFor="">
                <img src={Img} alt="" />
            </label>
            <button>Send</button>
        </div>
    </InputContainer>
);

export default Input;
