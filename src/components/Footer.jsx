import { footer } from "../styles";
import NumberInput from "./NumberInput";
import MeowBtn from "./MeowBtn";

export default function Footer({
    numberOfFacts,
    setNumberOfFacts,
    generateFact
}) {
    return (
        <footer style={footer}>
            <NumberInput
                numberOfFacts={numberOfFacts}
                setNumberOfFacts={(number) => setNumberOfFacts(number)}
            />
            <MeowBtn handleMeow={generateFact} />
        </footer>
    )
}