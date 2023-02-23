import { TextField } from "@mui/material"
import { useState, useRef, useEffect, useMemo } from "react"
import { useDispatch } from "react-redux";
import { getCatalogRequest } from "../../redux-store/actions/catalogActions";

import { debounce } from "lodash"
import React from "react";
import { useSelector } from "react-redux";

const ProductSearch = () => {
    const dispatch = useDispatch();

    const requestPayload = useSelector((state: any) => state.catalog.requestPayload)
    const [searchTerm, setSearchTerm] = useState(requestPayload === undefined ? "" : requestPayload.searchTerm);

    useEffect(() => {
        const debouncedSearch = debounce(async () => {
            try {
                if (requestPayload !== undefined) {
                    if (searchTerm !== requestPayload.searchTerm) dispatch(getCatalogRequest({
                        searchTerm: searchTerm
                    }));
                } else {
                    if (searchTerm !== "") dispatch(getCatalogRequest({
                        searchTerm: searchTerm
                    }));
                }

            } catch (error) {
                console.error(error);
            }
        }, 1000);

        debouncedSearch();

        // Return a cleanup function to cancel the debounced search
        return () => {
            debouncedSearch.cancel();
        };
    }, [searchTerm, requestPayload]);

    const handleSearchInputChange = (event: any) => {
        setSearchTerm(event.target.value);
    };





    return (
        <TextField
            label="Search product"
            variant="outlined"
            value={searchTerm}
            fullWidth
            onChange={handleSearchInputChange}
        />
    )
}


//export default React.memo(ProductSearch);
export default ProductSearch