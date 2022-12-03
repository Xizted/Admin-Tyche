import { X } from 'react-feather';
import toast from 'react-hot-toast';

const ToastContent = ({ t, title, text }: any) => {
  return (
    <div className='d-flex'>
      <div className='d-flex flex-column'>
        <div className='d-flex justify-content-between'>
          <h6>{title}</h6>
          <X
            size={12}
            className='cursor-pointer'
            onClick={() => toast.dismiss(t.id)}
          />
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default ToastContent;
