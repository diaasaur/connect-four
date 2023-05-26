import useConfig from '../../../hooks/useConfig';
import useGame from '../../../hooks/useGame';
import ButtonGroup from '../../ui/button-group/ButtonGroup';
import BrickButton from '../../ui/button/BrickButton';
import Card from '../../ui/card/Card';
import Modal from '../../ui/modal/Modal';
import styles from './pause.module.css';

export default function Pause({ close }) {
  const [, configDispatch] = useConfig();
  const [, gameDispatch] = useGame();

  return (
    <Modal>
      <Card>
        <div className={styles.pause}>
          <h1 className={styles.title}>pause</h1>
          <ButtonGroup>
            <BrickButton onClick={close}>continue game</BrickButton>
            <BrickButton onClick={() => gameDispatch({ type: 'reset' })}>
              restart
            </BrickButton>
            <BrickButton
              type="red"
              onClick={() => {
                configDispatch({ type: 'quit' });
              }}
            >
              quit game
            </BrickButton>
          </ButtonGroup>
        </div>
      </Card>
    </Modal>
  );
}
