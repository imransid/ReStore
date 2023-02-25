
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useCallback, useState } from "react";

interface Prop {
    items: string[];
    checked?: string[];
    onChange: (items: string[]) => void;
}

export default function CheckBoxButtons({
    items, checked, onChange
}: Prop) {

    const [currentIndex, setCurrentIndex] = useState<string[]>(checked || [])


    const onCheck = (value: string) => {
        const currentItem = currentIndex.findIndex(item => item === value)
        let newChecked: string[] = []
        if (currentItem === -1) newChecked = [...currentIndex, value];
        else newChecked = currentIndex.filter(item => item !== value)

        setCurrentIndex(newChecked);
        onChange(newChecked);
    }

    return (
        <FormGroup>
            {
                items.map((item: string, key: number) =>
                    <FormControlLabel key={key} control={<Checkbox
                        checked={currentIndex.indexOf(item) !== -1}
                        onClick={() => onCheck(item)}
                        sx={{ mr: 1 }} />} label={item} />
                )
            }
        </FormGroup>
    )

}