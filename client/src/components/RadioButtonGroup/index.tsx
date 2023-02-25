import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { sortOption } from "../../interface/Catalog"
import { getCatalogRequest } from "../../redux-store/actions/catalogActions"


const RadioButtonGroup = () => {
    const dispatch = useDispatch();
    const sortOptions = useSelector((state: any) => state.catalog.sortOptions)
    const requestPayload = useSelector((state: any) => state.catalog.requestPayload)

    const [value, setValue] = useState(requestPayload === undefined ? null : requestPayload.oderBy);
    const Onchange = (e: any) => {
        setValue(e.target.value);
        let reqData;

        if (requestPayload) {
            reqData = requestPayload;
            reqData['oderBy'] = e.target.value

        } else {
            reqData = {
                oderBy: e.target.value
            }
        }

        dispatch(getCatalogRequest(reqData));
    }

    return (
        <FormControl>
            <RadioGroup onChange={Onchange} value={value}>
                {
                    sortOptions.map((item: sortOption, key: number) => <FormControlLabel key={key} value={item.value} control={<Radio sx={{ mr: 1 }} />} label={item.label} />)
                }
            </RadioGroup>
        </FormControl>
    )
}

export default RadioButtonGroup