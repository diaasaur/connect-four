import classNames from 'classnames';
import './Card';
import Card from './Card';
import styles from './card.module.css';

export default function IconCard({
  children,
  icon,
  position = 'bottom',
  ...rest
}) {
  return (
    <Card type="white" {...rest}>
      <div className={classNames(styles.icon, styles[position])}>{icon}</div>
      {children}
    </Card>
  );
}
