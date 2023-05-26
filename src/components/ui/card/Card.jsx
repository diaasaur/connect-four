import classNames from 'classnames';
import styles from './card.module.css';

export default function Card({
  children,
  className,
  type = 'purple',
  ...rest
}) {
  const combinedClassName = classNames(styles.card, className, type);

  return (
    <div className={combinedClassName} {...rest}>
      {children}
    </div>
  );
}
