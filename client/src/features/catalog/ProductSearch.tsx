import { TextField } from "@mui/material"
import { useState, useEffect } from "react"
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

                let reqData;
                if (requestPayload !== undefined) {

                    reqData = { ...requestPayload };
                    reqData['searchTerm'] = searchTerm;

                    if (searchTerm !== requestPayload.searchTerm) dispatch(getCatalogRequest(reqData));
                } else {

                    reqData = {
                        searchTerm: searchTerm
                    }

                    if (searchTerm !== "") dispatch(getCatalogRequest(reqData));
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
    }, [searchTerm, requestPayload, dispatch]);

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