import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context";
import {getTotalCount} from "../API/getTotalCount";
import {getContent} from "../API/getContent";
import {getPagesArray, getTotalPages} from "../utils/getPageCount";
import 'normalize.css/normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import {Button, Card, Elevation} from "@blueprintjs/core";
import styles from '../styles/ContentBoard.module.css'

const ContentBoard = ({pageNumber = 9, limitNumber = 1}) => {

    const {accessToken, isAuth} = useContext(AuthContext)

    const [totalCount, setTotalCount] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(limitNumber)
    const [page, setPage] = useState(pageNumber)
    const [items, setItems] = useState([])
    const [isPostLoading, setPostLoading] = useState(false)

    useEffect(() => {
        getAllInformation()
    }, [page])



    const getAllInformation = async () => {
        if (isAuth) {
            const getTotalCountRes = await getTotalCount(accessToken)
            setTotalCount(getTotalCountRes)
            setTotalPages(getTotalPages(totalCount, limit))

            console.log(totalCount, totalPages)
            const _items = await getContent(accessToken, page, limit)
            setItems(_items)
        }
    }
    getAllInformation()
    let pagesArray = getPagesArray(page)






    return (
        <div className={styles.globalBoardContainer}>
            <div className={styles.boardContainer}>
                {items.map(item =>
                    <div >
                        <Card className={styles.cardContainer} interactive={true} elevation={Elevation.TWO}>
                            <h2>{item.name}</h2>
                            <h4 className={styles.specialH}>{item.category}</h4>
                        </Card>
                    </div>

                )}
            </div>
            { isAuth ?
                <div className={styles.pages}>
                    <Button text="первая" onClick={() => setPage(1)}/>
                    <Button text="-1" onClick={() => setPage(page - 1)}/>
                    <Button text="-10" onClick={() => setPage(page - 10)}/>
                    {pagesArray.map(p =>
                        <Button onClick={() => setPage(p)} className={page === p ? "bp4-intent-success" : ""}>{p}</Button>
                    )}
                    <Button text="+1" onClick={() => setPage(page + 1)}/>
                    <Button text="+10" onClick={() => setPage(page + 10)} />
                    <Button text="последняя"  onClick={() => setPage(totalPages)}/>
                </div>
                :
                <div></div>
            }

        </div>
    );
};

export default ContentBoard;