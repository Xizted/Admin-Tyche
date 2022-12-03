import { Alert as AlertBS } from 'reactstrap';

interface AlertProps {
  color: string;
  title: string;
  text?: string;
}

const Alert = ({ color, title, text }: AlertProps) => {
  return (
    <div className='spacing-0'>
      <AlertBS color={color}>
        <div className='alert-body'>
          <span className='fw-bold'>{title}</span>
          <span>{text}</span>
        </div>
      </AlertBS>
    </div>
  );
};

export default Alert;
