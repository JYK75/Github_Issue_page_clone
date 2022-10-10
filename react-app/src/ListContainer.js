import axios from "axios";
import cx from "clsx";

import styles from "./ListContainer.module.css";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import ListFilter from "./components/ListFilter";
import ListItemLayout from "./components/ListItemLayout";
import Pagination from "./components/Pagination";
import OpenClosedFilters from "./OpenClosedFilters";
import { GITHUB_API } from "./api.js";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open");
  const [list, setList] = useState([]);
  const [checked, setChecked] = useState();
  //const [isOpenMode, setIsOpenMode] = useState(true);
  //const [params, setParams] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const state = searchParams.get("state");

  async function getData(params) {
    const data = await axios.get(`${GITHUB_API}/repos/facebook/react/issues`, {
      params,
    });
    setList(data.data);
  }

  useEffect(() => {
    getData(searchParams);
  }, [searchParams]); //Dom이 render 된 후에

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "green",
              color: "white",
            }}
          >
            New Issue
          </Button>
        </div>
        <OpenClosedFilters
          isOpenMode={state !== "closed"}
          onClickMode={(mode) => setSearchParams({ mode })}
        />
        <ListItemLayout className={styles.listFilter}>
          <ListFilter
            onChangeFilter={(params) => {
              // 필터링된 요소에 맞게 데이터를 불러오기
              // const data = getData('필터링된 정보')
              // setList(data);
              setSearchParams(params);
            }}
          />
        </ListItemLayout>
        {list.map((item) => (
          <ListItem
            key={item.id}
            data={item}
            checked={checked}
            onClickCheckBox={() => setChecked((checked) => !checked)}
          />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          currentPage={page}
          onClickPageButton={(pageNumber) =>
            setSearchParams({ page: pageNumber })
          }
          maxPage={10}
        />
      </div>
    </>
  );
}
