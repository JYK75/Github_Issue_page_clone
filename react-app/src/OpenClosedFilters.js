import cx from "clsx";

import styles from "./OpenClosedFilters.module.css";

export default function OpenClosedFilters({ isOpenMode, onClickMode }) {
  return (
    <>
      <OpenClosedFilter
        state={"Open"}
        selected={isOpenMode}
        onClick={() => onClickMode("open")}
      />
      <OpenClosedFilter
        state={"Closed"}
        selected={!isOpenMode}
        onClick={() => onClickMode("closed")}
      />
    </>
  );
}

function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {size} {state}
    </span>
  );
}
