import ButtonBase from './ButtonBase';

export default function BrickButton({
  type = 'white',
  justifyContent = 'center',
  ...rest
}) {
  return (
    <ButtonBase
      type={type}
      _className="brick"
      justifyContent={justifyContent}
      {...rest}
    />
  );
}
