import { Wrapper } from "../components/PageWrapper";

export default function Consult() {
    return (
        <Wrapper>
            <select>
                <option>Selecione uma parada</option>
                <optgroup label='primeiro'>
                    <option value='111'>111</option>
                    <option value='222'>222</option>
                </optgroup>
                <optgroup label='segundo'>
                    <option value='111'>111</option>
                    <option value='222'>222</option>
                </optgroup>
            </select>
        </Wrapper>
    )
}