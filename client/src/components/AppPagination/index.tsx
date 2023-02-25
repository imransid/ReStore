import { Box, Pagination, Typography } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { getCatalogRequest } from "../../redux-store/actions/catalogActions";

const AppPagination = () => {

    const dispatch = useDispatch();
    const metadata = useSelector((state: any) => state.catalog.metaData)

    return (
        <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Typography>
                Displaying {(metadata?.currentPage - 1) * metadata?.pageSize + 1} - {
                    metadata?.currentPage * metadata?.pageSize > metadata?.totalCount ? metadata?.totalCount : metadata?.currentPage * metadata?.pageSize
                } Items
            </Typography>

            <Pagination
                count={metadata?.totalPage}
                size="large"
                onChange={(e, page) => dispatch(getCatalogRequest({
                    pageNumber: page
                }))}
                page={metadata?.currentPage}
                color="secondary" />
        </Box>
    )
}
export default AppPagination