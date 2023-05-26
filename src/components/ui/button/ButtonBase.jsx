import classNames from 'classnames';
import styles from './button.module.css';

export default function ButtonBase({
  className,
  _className,
  type,
  justifyContent,
  children,
  ...rest
}) {
  const combinedClassName = classNames(
    styles[_className],
    type,
    styles[justifyContent],
    className
  );

  return (
    <button className={combinedClassName} {...rest}>
      {children}
    </button>
  );
}
