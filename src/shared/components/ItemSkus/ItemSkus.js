import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import ItemCard from "../ItemCard/ItemCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { desktopSearchSagaActions } from "redux/saga-action/search/desktopSearch-saga-action";
import MarketPlaceFilters from "modules/MarketPlace/components/MarketPlaceFilters/MarketPlaceFilters";
import {
  setItemStateDomForSearch,
  setSortByForSearch,
  setItemStateObjForSearch,
  setSingleSelectDropdownForSearch,
  setItemStateForSearch,
  resetSearchIds,
  setFilterStateForSearch,
  setItemStateDomForMobileForSearch,
} from "redux/slice/search/desktopSearch-slice";
import MarketPlaceDropdown from "modules/MarketPlace/components/MarketPlaceDropdown/MarketPlaceDropdown";
import MarketPlaceOptions from "modules/MarketPlace/components/MarketPlaceOptions/MarketPlaceOptions";
import InfiniteScroller from "../infiniteScroller/infiniteScroller";
import FullLoader from "shared/FullLoader/FullLoader";
import { Accordion } from "react-bootstrap";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

const initialLoad = false
function ItemSkus() {
  let scroller = undefined;
  const { type, slug } = useParams();
  const searchState = useSelector((state) => state.search);
  console.log(searchState)
  const dispatch = useDispatch();
  const [cardsDom, setcardsDom] = useState(undefined);

  const setItemStateDom = () => {
    const dom = (
      <div>
        <MarketPlaceFilters
          items={searchState.itemStateObj}
          handleItemState={handleItemState}
        />
      </div>
    );
    dispatch(setItemStateDomForSearch(dom));
  };

  /* handler to set item state */
  const handleItemState = (e) => {
    let obj = JSON.parse(JSON.stringify(searchState.itemStateObj));
    obj[e.target.value].checked = e.target.checked;
    dispatch(setItemStateObjForSearch(obj));
    let filterBy = [];
    Object.keys(obj).forEach((itemStatusKey) => {
      if (obj[itemStatusKey].checked) {
        filterBy.push(obj[itemStatusKey].value);
      }
    });
    let filtersString = filterBy.toString();
    if (filterBy.length > 0) {
      dispatch(setItemStateForSearch(filtersString));
    } else {
      dispatch(setItemStateForSearch("onsale,trending,onauction"));
    }
  };

  /** handler to sort price low to high and from high to low
   * it will set localState of selected sort option
   */
  const sortByPriceHandler = (value) => {
    dispatch(setSortByForSearch(value));
  };

  const setSingleSelectDropdownDOM = (sortValue) => {
    const singleSelectDrop = [
      {
        title: "PriceLowToHigh",
        options: [
          {
            id: 1,
            value: "Serial Low To High",
            name: "priceLevel",
            label: "Serial Low To High",
            selected: searchState.sortby === "seriallowtohigh" ? true : false,
          },
          {
            id: 2,
            value: "Serial High To Low",
            name: "priceLevel",
            label: "Serial High To Low",
            selected: sortValue === "serialhightolow" ? true : false,
          },
        ],
        handler: sortByPriceHandler,
        defaultValue:
          sortValue === "seriallowtohigh"
            ? "Serial Low To High"
            : "Serial High To Low",
      },
    ];
    const dom = (
      <div className="mkop-item">
        <MarketPlaceDropdown
          content="Select Price"
          options={singleSelectDrop[0].options}
          handler={singleSelectDrop[0].handler}
          defaultValue={singleSelectDrop[0].defaultValue}
        />
      </div>
    );
    dispatch(setSingleSelectDropdownForSearch(dom));
  };

  useEffect(() => {
    if (
      searchState.itemSkusIDs !== undefined &&
      searchState.itemSkusIDs.length > 0
    ) {
      setcardsDom(
        setCardDom(searchState.itemSkusIDs, searchState.itemSkusHash)
      );
    }
  }, [searchState.itemSkusIDs]);

  useEffect(() => {
    console.log('********* isnide useEffect ***********')
    if (scroller !== undefined) {
      scroller["pageLoaded"] = 0;
    }
    if (searchState.filtersState) {
      dispatch(resetSearchIds());
      setcardsDom(undefined);
      callService(0);
      setSingleSelectDropdownDOM(searchState.sortby);
      setItemStateDom();
      setItemStateDomForMobile();
      dispatch(setFilterStateForSearch(false));
    }
  }, [
    searchState.itemState,
    searchState.sortby,
    searchState.filtersState,
    searchState.filterBy
  ]);

  const handleItemStateMobileDom = (e) => {
    let obj = JSON.parse(JSON.stringify(searchState.itemStateObj));
    Object.keys(obj).forEach(stateKey => {
      if(obj[stateKey].value === e.target.value) {
        obj[stateKey].checked = e.target.checked
      }
    })
    dispatch(setItemStateObjForSearch(obj));
    let filterBy = [];
    Object.keys(obj).forEach((itemKey) => {
      if (obj[itemKey].checked) {
        filterBy.push(obj[itemKey].value);
      }
    });
    let filtersString = filterBy.toString();
    if (filterBy.length > 0) {
      dispatch(setItemStateForSearch(filtersString));
    } else {
      dispatch(setItemStateForSearch("onsale,trending,onauction"));
    }
  }

  const setItemStateList = (stateHash) => {
    let data = []
    let dropdown = {};
    dropdown["title"] = 'Items State';
    dropdown["options"] = [];

    Object.keys(stateHash).forEach(stateKey => {
      let obj = {
        id: stateHash[stateKey].id,
        value: stateHash[stateKey].value,
        label: stateKey,
        category: stateKey,
        checked: stateHash[stateKey].checked,
      };
      dropdown["options"].push(obj);
      dropdown["handler"] = handleItemStateMobileDom;
    });
    data.push(dropdown);

    return data
  }

  const setItemStateDomForMobile = () => {
    let data = setItemStateList(searchState.itemStateObj)
    const itemState = data.map((obj, index) => {
      return (
        <>
          <div className="mkop-item tv-mr-16">
            {/** multiselect */}
            <Accordion.Item eventKey={index}>
              <Accordion.Header>
                {obj.title.charAt(0).toUpperCase() + obj.title.slice(1)}
              </Accordion.Header>
              <Accordion.Body>
                {obj.options.map((option) => (
                  <CustomCheckbox
                    label={option.label}
                    id={option.id}
                    handler={obj.handler}
                    value={option.value}
                    category={option.category}
                    checked={option.checked}
                  />
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </div>
        </>
      );
    });
    dispatch(setItemStateDomForMobileForSearch(itemState));
  }


  /* function which will dispatch saga action */
  const callService = async (pageno) => {
    /* data will be from component local state */
    dispatch({
      type: desktopSearchSagaActions.GET_ITEM_SKUS,
      payload: {
        filterby: searchState.itemState,
        sortby: searchState.sortby,
        pagesize: 10,
        pageno: pageno,
        slug: slug,
        type: type,
      },
    });
  };

  /* loadItems function to load more items used in infinite scroller */
  const loadItems = async (pageNum) => {
    callService(pageNum);
  };

  const handleScroll = (scroll) => {
    scroller = scroll;
  };

  /* set card dom */
  const setCardDom = (ids, hash) => {
    return ids.map((obj) => {
      return (
        <>
          <div className="col-6 col-xxl-3 col-md-4 tv-mb-16">
            <ItemCard
              isMoreOptions={false}
              bidPrice={
                hash[obj.id].salePrice ? "USD $" + hash[obj.id].salePrice : ""
              }
              haveBlockChainIcon={hash[obj.id].blockchain?.logo}
              status={`#${hash[obj.id].skuNumber} of ${hash[obj.id].totalSKUCount}`}
              name={hash[obj.id]?.name}
              image={hash[obj.id].thumbnail_url}
              rarity={hash[obj.id].rarity?.name?.toString().toLowerCase()}
              collectionIcon={hash[obj.id].brand?.logo}
              // route={`/`}
              type={hash[obj.id].itemState}
              slug={slug}
              itemType={type}
              serialNumber = {hash[obj.id].serialNumber}
              type={hash[obj.id].itemState?.toLowerCase()}
            />
          </div>
        </>
      );
    });
  };

    return (
        <Layout>
            <>
                {(
                <>
                   <div className = "tv-container tv-pb-80">
                        {
                            <MarketPlaceOptions
                                singleSelectDropdown={searchState.singleSelectDropdown}
                                itemStateDom={searchState.itemstateDom}
                                itemStateMobileDom = {searchState.itemStateDomForMobile}

                            />
                            }
                            <InfiniteScroller
                            loadItems={(pageNum) => {
                                return loadItems(pageNum);
                            }}
                            items={<div className="row row-grid">{cardsDom}</div>}
                            loadMore={searchState.loadMore}
                            initialLoad={initialLoad}
                            handleScroll={handleScroll}
                            ></InfiniteScroller>
                   </div>
                </>
                )}
                { (searchState.itemsStatus === 'idle' ) &&  (cardsDom === undefined ) &&
                    <FullLoader />}
            </>
    </Layout>
  );
}

export default ItemSkus;
