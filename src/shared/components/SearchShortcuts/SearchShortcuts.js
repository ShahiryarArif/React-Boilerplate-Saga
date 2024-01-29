import { Trash } from "assets/SVGs/SVGs";
import React from "react";
import "./SearchShortcuts.scss";

const SearchShortcuts = () => {
  return (
    <>
      <div className="search-shortcut  tv-pb-20 tv-px-16">
        <div className="search-shortcut-content d-flex flex-column">
          <div className=" d-flex justify-content-between align-itens-center tv-mb-20">
            <span className="search-shortcut-title">Top Searches</span>
            <Trash color="#001C29" />
          </div>
          <div className="search-shortcut-suggestions d-flex flex-wrap">
            <span class="search-shortcut-badge tv-py-4 tv-px-14">
              Godzilla{" "}
            </span>
            <span class="search-shortcut-badge tv-py-4 tv-px-14">
              Penny Robinson
            </span>
            <span class="search-shortcut-badge active tv-py-4 tv-px-14">
              Hulk 3D
            </span>
          </div>
        </div>
      </div>
      <div className="search-shortcut  tv-pb-20 tv-pt-10 tv-px-16">
        <div className="search-shortcut-content d-flex flex-column">
          <div className=" d-flex justify-content-between align-itens-center tv-mb-20">
            <span className="search-shortcut-title">Top Searches</span>
            <Trash color="#001C29" />
          </div>
          <div className="search-shortcut-suggestions d-flex flex-wrap">
            <span class="search-shortcut-badge tv-py-4 tv-px-14">
              Godzilla{" "}
            </span>
            <span class="search-shortcut-badge tv-py-4 tv-px-14">
              Penny Robinson
            </span>
            <span class="search-shortcut-badge active tv-py-4 tv-px-14">
              Hulk 3D
            </span>
          </div>
        </div>
      </div>
      <div className="search-shortcut  tv-pb-20 tv-pt-10 tv-px-16">
        <div className="search-shortcut-content d-flex flex-column">
          <div className=" d-flex justify-content-between align-itens-center tv-mb-20">
            <span className="search-shortcut-title">Top Searches</span>
            <Trash color="#001C29" />
          </div>
          <div className="search-shortcut-suggestions d-flex flex-wrap">
            <span class="search-shortcut-badge tv-py-4 tv-px-14">
              Godzilla{" "}
            </span>
            <span class="search-shortcut-badge tv-py-4 tv-px-14">
              Penny Robinson
            </span>
            <span class="search-shortcut-badge active tv-py-4 tv-px-14">
              Hulk 3D
            </span>
            <span class="search-shortcut-badge tv-py-4 tv-px-14">
              Godzilla{" "}
            </span>
            <span class="search-shortcut-badge tv-py-4 tv-px-14">
              Penny Robinson
            </span>
          </div>
        </div>
      </div>
      </>
  );
};

export default SearchShortcuts;
