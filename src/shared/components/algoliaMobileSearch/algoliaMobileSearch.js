import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./algoliaMobileSearch.scss";
import { Link } from "react-router-dom";
import { LongRightArrow } from "assets/SVGs/SVGs";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  // Hits,
  SearchBox,
  Configure,
  connectStats,
  connectHits,
} from "react-instantsearch-dom";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { resetSearchIds } from "redux/slice/search/desktopSearch-slice";
import ItemCard from "../ItemCard/ItemCard";
import { linkCreator } from "utils/tagsSetter";

const searchClient = algoliasearch("9X0X0QDPMK", "1d1f293e4d2e17534fae4476e5cbdfba");
const routeCreator = (type) => {
  if (type?.indexOf("asset") !== -1) return "skus/asset";
  else if (type?.indexOf("pack") !== -1) return "skus/pack";
  else return "collection";
};
let mobileSearch = undefined;

const Hits = (hitList = { hits }) => {
  const dispatch = useDispatch();
  const handleSearh = async () => {
    await dispatch(resetSearchIds());
    mobileSearch();
  };
  return hitList.hits.map((hit) => (
    <Link onClick={handleSearh} to={`/${routeCreator(hit?.type)}/${hit.slug}`} className='search-link'>
      <h5>{hit.name}</h5> <LongRightArrow color='#6c757d' />
    </Link>
  ));
};

const handleSearhRoute = async (hit) => {
  let route = linkCreator(hit);
  window.location.href = `${window.location.protocol}/${route}/${hit.slug}`;
};

const HitsWithImg = (hitList = { hits }) => {
  return hitList.hits.map((hit, index) => {
    if (index < 2) {
      return (
        <div className='col-6 col-xxl-3 col-xl-4'>
          <ItemCard
            isMoreOptions={false}
            haveBlockChainIcon={hit?.blockchain?.logo}
            status={hit?.skus + " Items"}
            name={hit?.name}
            rarity={hit?.rarity?.toString().toLowerCase()}
            image={hit?.thumbnail_url}
            collectionIcon=''
            have3DALogo
            togalModal={() => handleSearhRoute(hit)}
          />
        </div>
      );
    }
  });
};

const CustomHits = connectHits(Hits);
const CustomHitsWithImg = connectHits(HitsWithImg);

const Stats = ({ nbHits, dataFlagHandler, searchString }) => {
  const dispatch = useDispatch();
  const hrefText = searchString !== undefined ? searchString : "";
  const handleSearch = async () => {
    await dispatch(resetSearchIds());
    mobileSearch();
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

let hits = 1;
function AlgoliaMobileSearch(props) {
  const [searchStr, setsearchStr] = useState("");

  const handleDataFlag = (hit) => {
    hits = hit;
  };

  const resetSearch = () => {
    return setsearchStr("");
  };

  const handleSearchInput = (event) => {
    return setsearchStr(event.currentTarget.value !== "" ? event.currentTarget.value : "");
  };

  mobileSearch = props.mobileSearch;
  return (
    <div className='sm-search-wrapper'>
      <InstantSearch indexName={`${process.env.REACT_APP_SEARCH_INDEX}`} searchClient={searchClient}>
        <div className='search-form-content d-flex w-100'>
          <SearchBox
            defaultRefinement={searchStr}
            onChange={(event) => {
              handleSearchInput(event);
            }}
            onReset={(event) => {
              resetSearch();
            }}
          />
        </div>
        {searchStr !== "" && (
          <div className='mob-search-list'>
            <Configure hitsPerPage={5} />
            <CustomHits />
            <div className='d-flex justify-content-center mt-4'>
              <CustomStats searchString={searchStr} mobileSearch={props.mobileSearch} dataFlagHandler={handleDataFlag} />
            </div>
            <div className='sample-cards tv-px-10'>
              <div className='row row-grid tv-mt-14'>
                <CustomHitsWithImg />
              </div>
            </div>
          </div>
        )}
      </InstantSearch>
    </div>
  );
}

export default AlgoliaMobileSearch;
