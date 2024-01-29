import React from 'react'
import InfiniteScroll from 'react-infinite-scroller';

function InfiniteScroller(props) {

    const loader =   <div className="row row-grid">
        <div className="col-12">
            <div className="loadmore-box">
                <p className=" tv-px-40 tv-py-18 tv-mt-32">Load More...</p>
            </div>
        </div>
    </div>
    return (
        <>
            { props.scrollParentRef ? <InfiniteScroll 
                    pageStart={0}
                    loadMore={props.loadItems}
                    hasMore={props.loadMore}
                    loader={loader}
                    initialLoad = {props.initialLoad}
                    ref={(scroll) => props.handleScroll(scroll)}
                    useWindow={props.useWindow}
                    isReverse = {false}

                    getScrollParent={ () => props.scrollParentRef?.current }
                    >
                    {props.items}
                </InfiniteScroll> : <InfiniteScroll 
                    pageStart={0}
                    loadMore={props.loadItems}
                    hasMore={props.loadMore}
                    loader={loader}
                    threshold = {200}
                    initialLoad = {props.initialLoad}
                    ref={(scroll) => props.handleScroll(scroll)}
                    isReverse = {false}
                    >
                    {props.items}
                </InfiniteScroll>}
        </>
    )
}

export default InfiniteScroller


