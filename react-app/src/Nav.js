import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>Logo</div>
      <input className={styles.input} placeholder="Search or jump to..." />
      <span className={styles.txt}>Pulls</span>
      <span className={styles.txt}>Issues</span>
      <span className={styles.txt}>Marketplace</span>
      <span className={styles.txt}>Explore</span>
    </div>
  );
}
