import styled from "styled-components"

export default function SelectBox({name, value, items, setItem, handler}) {
    return (
        <>
            <Wrapper 
            value={value}
            label={name}
            onChange={setItem ? e => setItem(e.target.value) : e => handler(e.target.value)}
            >
                <option value="">{name}</option>
                {items.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}
            </Wrapper>
        </>
    )
}

const Wrapper = styled.select`
    width: 100%;
    max-width: 500px;
    height: 55px;
    background: white;
    border: none;
    border-radius: 5px;
    color: #333;
    border: 1px solid #333;
    font-size: 18px;
    padding: 0 12px;
`;