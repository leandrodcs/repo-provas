import styled from "styled-components"

export default function SubjectSelection({offline, name, value, items, setItem, handler}) {
    const periods = [];
    items.forEach(item => {
        let isIncluded = false;
        periods.forEach(period => {
            if (period.id === item.period.id) {
                isIncluded = true;
            }
        });
        if (!isIncluded) {
            periods.push(item.period)
        }
    })
    periods.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
    return (
            <Wrapper 
            offline={offline}
            value={value}
            label={name}
            onChange={setItem ? e => setItem(e.target.value) : e => handler(e.target.value)}
            >
                <Option value="" hidden>{name}</Option>
                {periods.map(period => (
                        <optgroup key={period.id} label={`${period.name} Período`}>
                            {items.map(item => item.period.name === period.name ?
                                <Option value={item.id} key={item.id}>{item.name} - {`${item.examCount} provas`}</Option>
                            :
                                ""
                            )}
                        </optgroup>
                ))}
            </Wrapper>
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
    outline: none;
    cursor: pointer;
    pointer-events: ${props => props.offline ? 'none' : 'initial'};
    opacity: ${props => props.offline ? '0.7' : '1'};
`;

const Option = styled.option`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 90%;
`;