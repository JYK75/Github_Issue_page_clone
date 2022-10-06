import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";

import styles from "./ListItem.module.css";
import ListItemLayout from "./ListItemLayout";
import Badge from "./Badge";

export default function ListItem({
  checked,
  onClickCheckBox,
  onClickTitle,
  data,
}) {
  const badges = data.labels;
  const state = data.state === "open" ? "opened" : "closed";
  const date = data.state === "open" ? data.created_at : data.closed_at;
  dayjs.extend(relativeTime);

  return (
    <ListItemLayout checked={checked} onClick={onClickCheckBox}>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          {data.title}
          {badges.length > 0 &&
            badges.map((props, idx) => <Badge {...props} key={`${idx}`} />)}
        </div>
        <div className={styles.description}>
          #{data.number} {state} {dayjs(date).fromNow()} by {data.user.login}
        </div>
      </div>
    </ListItemLayout>
  );
}
