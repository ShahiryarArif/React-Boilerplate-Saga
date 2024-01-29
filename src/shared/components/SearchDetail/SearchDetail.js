import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Hits, Pagination, Configure } from "react-instantsearch-dom";
import "./SearchDetail.scss";
import { linkCreator } from "utils/tagsSetter";

const searchClient = algoliasearch("9X0X0QDPMK", "1d1f293e4d2e17534fae4476e5cbdfba");

function SearchDetail() {
  const { name } = useParams();
  return (
    <Layout>
      <div className='tv-container search-detail-wrapper tv-py-30 tv-pb-80'>
        <h3 className='SearchDetail-heading tv-mb-28'>{name !== undefined ? `Search results for ${name}` : ""}</h3>
        <div class='row row-grid'>
          <InstantSearch indexName={`${process.env.REACT_APP_SEARCH_INDEX}`} searchClient={searchClient}>
            <Configure query={name !== undefined ? name : ""} hitsPerPage={10} />
            <Hits hitComponent={Hit} />
            <Pagination padding={2} />
          </InstantSearch>
        </div>
      </div>
    </Layout>
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
const handleSearh = async (hit) => {
  window.location = `/${linkCreator(hit)}/${hit.slug}`;
};

function Hit(props) {
  let sku = undefined;
  if (props.hit.type.includes("collection")) {
    sku = calCollectionSku(props.hit);
  } else {
    sku = props.hit.skus;
  }
  return (
    <div className='tv-mb-16'>
      <ItemCard
        // isMeduimSized
        isMoreOptions={false}
        haveBlockChainIcon={props.hit.blockchain?.logo}
        status={sku + " Items"}
        name={props.hit.name}
        rarity={props.hit?.rarity?.name?.toString().toLowerCase()}
        image={props.hit.thumbnail_url}
        collectionIcon=''
        have3DALogo
        // route={`/${props.hit.type.includes("asset") ? "skus/asset"
        //     : props.hit.type.includes("pack") ? "skus/pack" : "collection"
        // }/${props.hit.slug}`}
        togalModal={() => handleSearh(props.hit)}
      />
    </div>
  );
}

export default SearchDetail;
