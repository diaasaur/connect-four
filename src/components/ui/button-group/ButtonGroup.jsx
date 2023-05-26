import styles from './button-group.module.css';

export default function ButtonGroup({ children, ...rest }) {
  return (
    <div {...rest} className={styles.buttons}>
      {children}
    </div>
  );
}
