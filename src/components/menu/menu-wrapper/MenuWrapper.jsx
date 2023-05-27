import Card from '../../ui/card/Card';
import styles from './menu-wrapper.module.css';
import logo from './../../../assets/images/logo.svg';
import { genericVariants } from '../../../utils/animation-variants';
import { motion } from 'framer-motion';

export default function MenuWrapper({ useCard, children }) {
  const Wrapper = useCard ? Card : 'section';

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={genericVariants}
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }} //
    >
      <Wrapper className={styles['menu-wrapper']}>
        <div className={styles.header}>
          <h1 className="visually-hidden">Connect Four</h1>
          <img src={logo} alt="Connect Four Logo" />
        </div>
        {children}
      </Wrapper>
    </motion.div>
  );
}
