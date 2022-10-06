import cx from "clsx";

import styles from "./ListContainer.module.css";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import ListFilter from "./components/ListFilter";
import ListItemLayout from "./components/ListItemLayout";
import Pagination from "./components/Pagination";
import OpenClosedFilters from "./OpenClosedFilters";

import { useState } from "react";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open");
  const [list, setList] = useState(/**data */);
  const [page, setPage] = useState(1);

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
        <OpenClosedFilters />
        <ListItemLayout className={styles.listFilter}>
          <ListFilter
            onChangeFilter={(filteredData) => {
              // 필터링된 요소에 맞게 데이터를 불러오기
              // const data = getData('필터링된 정보')
              // setList(data);
            }}
          />
        </ListItemLayout>
        <div className={styles.container}>
          <ListItem
            badges={[
              {
                color: "red",
                title: "Bug",
              },
            ]}
          />
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={10}
          currentPage={page}
          onClickPageButton={(number) => setPage(number)}
        />
      </div>
    </>
  );
}
