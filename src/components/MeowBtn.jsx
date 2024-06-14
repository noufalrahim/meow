import { meowBtn, meowBtnText } from "../styles";

export default function MeowBtn({handleMeow}) {
    return (
        <button onClick={handleMeow} style={meowBtn}>
            <p style={meowBtnText}>Meow..!</p>
        </button>
    )
}