import { numberInput } from "../styles";

export default function NumberInput({
    numberOfFacts,
    setNumberOfFacts
}) {
    return (
        <input type='number' style={numberInput}
            value={numberOfFacts}
            onChange={(event) => {
              setNumberOfFacts(event.target.value);
            }}
          />
    )
}