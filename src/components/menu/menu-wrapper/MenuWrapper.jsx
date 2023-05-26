import Card from '../../ui/card/Card';
import styles from './menu-wrapper.module.css';
import logo from './../../../assets/images/logo.svg';

export default function MenuWrapper({ useCard, children }) {
  const Wrapper = useCard ? Card : 'section';

  return (
    <Wrapper className={styles['menu-wrapper']}>
      <div className={styles.header}>
        <h1 className="visually-hidden">Connect Four</h1>
        <img src={logo} alt="logo" />
      </div>
      {children}
    </Wrapper>
  );
}
