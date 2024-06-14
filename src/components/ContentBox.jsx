import { contentBox } from "../styles";
export default function ContentBox(
    { fact }
) {
    return (
        <div style={contentBox}>
            <p>{fact}</p>
        </div>
    )
}