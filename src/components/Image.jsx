import { image, imageContainer } from "../styles";

export default function Image() {
    return (
        <div style={imageContainer}>
            <img src='cat.png' alt='cat' style={image} />
        </div>
    )
}