import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function SelectBox({name, value, items, setItem, handler}) {
    return (
        <FormControl required>
            <InputLabel className="label" id={`${name}-selection`}>{name}</InputLabel>
            <Select 
            labelId={`${name}-selection`}
            value={value}
            label={name}
            onChange={setItem ? e => setItem(e.target.value) : e => handler(e.target.value)}
            >
                {items.map(item => <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>)}
            </Select>
        </FormControl>
    )
}