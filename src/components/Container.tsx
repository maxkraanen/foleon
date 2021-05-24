import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import debounce from "lodash/debounce";

import Card from "./Card";

import * as S from "./styled/styledContainer";
import Pagination from "./Pagination";
import { FilterOption, PublicationData, Article } from "../types";

const Container: React.FC = () => {
  const [publicationData, setPublicationData] =
    useState<null | PublicationData>(null);
  const [authorization, setAuthorization] = useState(null);
  const [currentPage, setCurrentPage] = useState(publicationData?.page ?? 1);
  const [filterOptions, setFilterOptions] =
    useState<null | FilterOption[]>(null);
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Set authentication
  useEffect(() => {
    axios
      .post("https://api.foleon.com/oauth", {
        grant_type: "client_credentials",
        client_id: "avwi48Oz0X",
        client_secret:
          "7b25d5872f7f5be38a765704dc875a83272aa69b3216054425aef4998e347f58",
      })
      .then((response) => setAuthorization(response.data.access_token));
  }, []);

  // get filter categories
  useEffect(() => {
    if (authorization) {
      axios
        .get(`https://api.foleon.com/v2/magazine/title?`, {
          headers: { Authorization: `Bearer ${authorization}` },
        })
        .then((response) => {
          setFilterOptions(response.data._embedded.title);
        });
    }
  }, [authorization]);

  // get projects
  useEffect(() => {
    const getFilter = () => {
      if (filter) {
        return {
          field: "category",
          type: "eq",
          value: filter,
        };
      }
    };

    if (authorization) {
      axios
        .get(
          `https://api.foleon.com/v2/magazine/edition?${qs.stringify({
            page: currentPage,
            limit: 20,
            query: [
              getFilter(),
              {
                field: "name",
                type: "like",
                value: `%${searchQuery}%`,
              },
            ],
          })}`,
          {
            headers: { Authorization: `Bearer ${authorization}` },
          }
        )
        .then((response) => {
          console.log(response.data);
          setPublicationData(response.data);
        });
    }
  }, [currentPage, authorization, filter, searchQuery]);

  const handleSearch = debounce((query) => {
    setSearchQuery(query);
  }, 300);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Publications</S.Title>
      </S.TitleContainer>

      <S.SearchAndSelect>
        <S.Search
          type="text"
          placeholder="search..."
          onKeyUp={(e) => handleSearch(e.currentTarget.value)}
        />

        {filterOptions && (
          <>
            <S.Select
              name="filter"
              id="filter"
              onChange={(e) => setFilter(e.currentTarget.value)}
            >
              <option value="">Choose a filter</option>
              {filterOptions?.map((filter: FilterOption) => {
                return (
                  <option value={filter.identifier} key={filter.identifier}>
                    {filter.name}
                  </option>
                );
              })}
            </S.Select>
          </>
        )}
      </S.SearchAndSelect>

      {publicationData?._embedded?.edition?.map((article: Article) => (
        <Card {...article} key={article.identifier} />
      ))}

      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPageCount={publicationData?.page_count ?? 0}
      />
    </S.Container>
  );
};

export default Container;
