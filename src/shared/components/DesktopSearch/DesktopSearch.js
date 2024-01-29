import { Close } from "assets/SVGs/SVGs";
import React, { useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import ItemCard from "../ItemCard/ItemCard";
import "./desktopSearch.scss";
import algoliasearch from "algoliasearch/lite";
import { useHistory } from "react-router-dom";

import { InstantSearch, Hits, SearchBox, Configure, connectStats, HierarchicalMenu } from "react-instantsearch-dom";
import { useDispatch } from "react-redux";
import { resetSearchIds } from "redux/slice/search/desktopSearch-slice";
import NotFound from "../NotFound/NotFound";
import { linkCreator } from "utils/tagsSetter";

let noOfHits = 0;
let desktopSearch = undefined;
let history;
const searchClient = algoliasearch("9X0X0QDPMK", "1d1f293e4d2e17534fae4476e5cbdfba");

const Stats = ({ nbHits, dataFlagHandler, searchString }) => {
  const dispatch = useDispatch();
  const hrefText = searchString !== undefined ? searchString : "";
  const handleSearch = async () => {
    await dispatch(resetSearchIds());
    desktopSearch();
  };
  dataFlagHandler(nbHits);

  return (
    <>
      {nbHits > 0 && (
        <PrimaryButton
          type='button'
          size='btn-sm'
          text={`${nbHits.toLocaleString()} results found`}
          rounded={false}
          outlined={true}
          btnBG='tv-btn-default'
          spacingClasses=''
          additionalClass=''
          reverse={false}
          hasIcon={false}
          icon=''
          isLink={true}
          href={`/search-results/${hrefText}`}
          togalModal={handleSearch}
        />
      )}
    </>
  );
};

const CustomStats = connectStats(Stats);

const DesktopSearch = (props) => {
  desktopSearch = props.desktopSearch;
  history = useHistory();
  const [hits, sethits] = useState(1);
  const [searchStr, setsearchStr] = useState(props.searchString);

  const handleDataFlag = (hit) => {
    sethits(hit);
  };

  return (
    <>
      <div className='tv-desktop-search-wrapper'>
        <div className='tv-desktop-search-content'>
          <InstantSearch indexName={`${process.env.REACT_APP_SEARCH_INDEX}`} searchClient={searchClient}>
            <header>
              <div className='tv-desktop-search-form'>
                <SearchBox
                  defaultRefinement={props.searchString}
                  translations={{
                    placeholder: "Search by brand, item or collection",
                  }}
                  onChange={(event) => {
                    setsearchStr(event.currentTarget.value !== "" ? event.currentTarget.value : undefined);
                  }}
                  onReset={(event) => {
                    setsearchStr(undefined);
                  }}
                />
                <PrimaryButton
                  type='button'
                  size='btn-sm'
                  text=''
                  rounded={false}
                  outlined={false}
                  btnBG='tv-btn-default'
                  spacingClasses=''
                  additionalClass='tv-icon-btn'
                  reverse={false}
                  hasIcon={true}
                  icon={<Close />}
                  togalModal={props.desktopSearch}
                />
              </div>
            </header>

            <div className='tv-desktop-search-body tv-container'>
              <div className='tv-desktop-search-results tv-py-32'>
                {
                  <div className='row'>
                    {hits > 0 && (
                      <div className='col-xl-2'>
                        <section>
                          <h5>Brand</h5>
                          <HierarchicalMenu attributes={["brand.name"]} />
                        </section>
                        <section>
                          <h5>Category</h5>
                          <HierarchicalMenu attributes={["category.name"]} />
                        </section>
                      </div>
                    )}
                    <div className='col-xl-10'>
                      <Configure hitsPerPage={5} />
                      <Hits hitComponent={Hit} />
                      <div className='d-flex justify-content-center'>
                        <CustomStats
                          searchString={searchStr}
                          desktopSearch={props.desktopSearch}
                          dataFlagHandler={handleDataFlag}
                        />
                      </div>
                    </div>
                  </div>
                }
                {
                  hits == 0 && <NotFound />
                  /* <div className="row tv-py-60">
                    <div className="col-12 search-notfound">
                      <img src={IconNotFound} alt="Icon_NotFound" />
                      <h4 className="tv-mt-20">No Items Found</h4>
                      <p>
                        Sorry, but the item you're looking for doesn't exist.
                        Try changing the search terms.
                      </p>
                    </div>
                  </div> */
                }
              </div>
            </div>
          </InstantSearch>
        </div>
      </div>
    </>
  );
};

function Hit(props) {
  let sku = undefined;
  if (props.hit.type.includes("collection")) {
    sku = calCollectionSku(props.hit);
  } else {
    sku = props.hit.skus;
  }
  const dispatch = useDispatch();

  const handleSearh = async (hit) => {
    await dispatch(resetSearchIds());
    desktopSearch();
    let route = linkCreator(hit);
    window.location.href = `${window.location.protocol}/${route}/${hit.slug}`;
  };

  return (
    <div className=''>
      <ItemCard
        isMeduimSized
        isMoreOptions={false}
        haveBlockChainIcon={props.hit.blockchain?.logo}
        status={sku + " Items"}
        // bidPrice={"USD $" + props.hit.salePrice}
        name={props.hit.name}
        rarity={props.hit?.rarity?.name?.toString().toLowerCase()}
        image={props.hit.thumbnail_url}
        collectionIcon=''
        have3DALogo={props.hit?.itemType}
        // route={`/`}
        togalModal={() => handleSearh(props.hit)}
      />
    </div>
  );
}

const calCollectionSku = (collection) => {
  let skus = 0;
  Object.keys(collection).forEach((key, index) => {
    if (key.includes("item") && collection[key] !== null) {
      skus++;
    }
  });
  return skus;
};

export default DesktopSearch;
