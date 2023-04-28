import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const PaginationFilter = (props = null) => {
    const [pages, setpages] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
        setpages(Array.from({ length: props.filterProps?.totalPages }, (_, i) => i + 1))
    }, [props.filterProps?.totalPages])

    return (
        <>
            <div className="bd-example d-flex justify-content-end">
                <nav aria-label="Another pagination example">
                    <ul className="pagination pagination-lg flex-wrap">
                        <li className="page-item ">
                            <a className={props.filterProps?.previousPage
                                ? "page-link" : " page-link disabled"} onClick={() => {
                                    props.filterProps?.previousPage && props.action(props.filterProps?.pageNumber - 1)(dispatch)
                                }} >Previous</a>
                        </li>
                        {
                            pages.map((page, idx) => {
                                return (
                                    <li key={idx} className={props.filterProps?.pageNumber === page ? "page-item active" : "page-item"} aria-current="page" >
                                        <a className="page-link" onClick={() => {
                                            props.action(page)(dispatch)
                                        }}>{page}</a>
                                    </li>
                                )
                            })
                        }

                        <li className="page-item">
                            <a className={props.filterProps?.nextPage ? "page-link" : " page-link disabled"} onClick={() => {
                                props.filterProps?.nextPage && props.action(props.filterProps?.pageNumber + 1)(dispatch)
                            }}  >Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default PaginationFilter;

export const PaginationFilter1 = (props = null) => {
    const [pages, setpages] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
        setpages(Array.from({ length: props.filterProps?.totalPages }, (_, i) => i + 1))
    }, [props.filterProps?.totalPages])

    return (
        <>
            <div className="bd-example d-flex justify-content-end">
                <nav aria-label="Another pagination example">
                    <ul className="pagination pagination-lg flex-wrap">
                        <li className="page-item ">
                            <a className={props.filterProps?.previousPage
                                ? "page-link" : " page-link disabled"} onClick={() => {
                                    props.filterProps?.previousPage && props.action(props.param1, props.filterProps?.pageNumber - 1)(dispatch)
                                }} >Previous</a>
                        </li>
                        {
                            pages.map((page, idx) => {
                                return (
                                    <li key={idx} className={props.filterProps.pageNumber === page ? "page-item active" : "page-item"} aria-current="page" >
                                        <a className="page-link" onClick={() => {
                                            props.action(props.param1, page)(dispatch)
                                        }}>{page}</a>
                                    </li>
                                )
                            })
                        }

                        <li className="page-item">
                            <a className={props.filterProps?.nextPage ? "page-link" : " page-link disabled"} onClick={() => {
                                props.filterProps?.nextPage && props.action(props.param1, props.filterProps?.pageNumber + 1)(dispatch)
                            }}  >Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export const PaginationFilter2 = (props = null) => {
    const [pages, setpages] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
        setpages(Array.from({ length: props.filterProps?.totalPages }, (_, i) => i + 1))
    }, [props.filterProps?.totalPages])

    return (
        <>
            <div className="bd-example d-flex justify-content-end">
                <nav aria-label="Another pagination example">
                    <ul className="pagination pagination-lg flex-wrap">
                        <li className="page-item ">
                            <a className={props.filterProps?.previousPage
                                ? "page-link" : " page-link disabled"} onClick={() => {
                                    props.filterProps?.previousPage && props.action(props.param1, props.param2, props.filterProps?.pageNumber - 1)(dispatch)
                                }} >Previous</a>
                        </li>
                        {
                            pages.map((page, idx) => {
                                return (
                                    <li key={idx} className={props.filterProps?.pageNumber === page ? "page-item active" : "page-item"} aria-current="page" >
                                        <a className="page-link" onClick={() => {
                                            props.action(props.param1, props.param2, page)(dispatch)
                                        }}>{page}</a>
                                    </li>
                                )
                            })
                        }

                        <li className="page-item">
                            <a className={props.filterProps?.nextPage ? "page-link" : " page-link disabled"} onClick={() => {
                                props.filterProps?.nextPage && props.action(props.param1, props.param2, props.filterProps?.pageNumber + 1)(dispatch)
                            }}  >Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export const PaginationFilter3 = (props = null) => {
    const [pages, setpages] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
        setpages(Array.from({ length: props.filterProps?.totalPages }, (_, i) => i + 1))
    }, [props.filterProps?.totalPages])

    return (
        <>
            <div className="bd-example d-flex justify-content-end">
                <nav aria-label="Another pagination example">
                    <ul className="pagination pagination-lg flex-wrap">
                        <li className="page-item ">
                            <a className={props.filterProps?.previousPage
                                ? "page-link" : " page-link disabled"} onClick={() => {
                                    props.filterProps?.previousPage && props.action(props.param1, props.param2, props.param3, props.filterProps?.pageNumber - 1)(dispatch)
                                }} >Previous</a>
                        </li>
                        {
                            pages.map((page, idx) => {
                                return (
                                    <li key={idx} className={props.filterProps?.pageNumber === page ? "page-item active" : "page-item"} aria-current="page" >
                                        <a className="page-link" onClick={() => {
                                            props.action(props.param1, props.param2, props.param3, page)(dispatch)
                                        }}>{page}</a>
                                    </li>
                                )
                            })
                        }

                        <li className="page-item">
                            <a className={props.filterProps?.nextPage ? "page-link" : " page-link disabled"} onClick={() => {
                                props.filterProps?.nextPage && props.action(props.param1, props.param2, props.param3, props.filterProps?.pageNumber + 1)(dispatch)
                            }}  >Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export const PaginationFilter4 = (props = null) => {
    const [pages, setpages] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
        setpages(Array.from({ length: props.filterProps?.totalPages }, (_, i) => i + 1))
    }, [props.filterProps?.totalPages])

    return (
        <>
            <div className="bd-example d-flex justify-content-end">
                <nav aria-label="Another pagination example">
                    <ul className="pagination pagination-lg flex-wrap">
                        <li className="page-item ">
                            <a className={props.filterProps?.previousPage
                                ? "page-link" : " page-link disabled"} onClick={() => {
                                    props.filterProps?.previousPage && props.action(props.param1, props.param2, props.param3, props.param4, props.filterProps?.pageNumber - 1)(dispatch)
                                }} >Previous</a>
                        </li>
                        {
                            pages.map((page, idx) => {
                                return (
                                    <li key={idx} className={props.filterProps?.pageNumber === page ? "page-item active" : "page-item"} aria-current="page" >
                                        <a className="page-link" onClick={() => {
                                            props.action(props.param1, props.param2, props.param3, props.param4, page)(dispatch)
                                        }}>{page}</a>
                                    </li>
                                )
                            })
                        }

                        <li className="page-item">
                            <a className={props.filterProps?.nextPage ? "page-link" : " page-link disabled"} onClick={() => {
                                props.filterProps?.nextPage && props.action(props.param1, props.param2, props.param3, props.param4, props.filterProps?.pageNumber + 1)(dispatch)
                            }}  >Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}