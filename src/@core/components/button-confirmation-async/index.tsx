import { Button } from 'reactstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss';
import toast from 'react-hot-toast';
import ToastContent from '../toast-content';

interface ButtonConfirmationAsyncProps {
  title: string;
  titleWarning: string;
  titleSuccess: string;
  textSuccess: string;
  color: string;
  onSubmit: any;
}

const MySwal = withReactContent(Swal);
const ButtonConfirmationAsync = ({
  title,
  titleSuccess,
  textSuccess,
  titleWarning,
  color,
  onSubmit,
}: ButtonConfirmationAsyncProps) => {
  const handleConfirmText = () => {
    return MySwal.fire({
      title: titleWarning,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ms-1',
      },
      buttonsStyling: false,
      preConfirm: () => {
        onSubmit();
        // fetch(`${url}${id ? `/${id}` : ''}`, {
        //   method,
        //   body,
        // })
        //   .then((response) => {
        //     if (!response.ok) {
        //       throw new Error(response.statusText);
        //     }
        //     // MySwal.fire({
        //     //   icon: 'success',
        //     //   title: `¡${titleSuccess}!`,
        //     //   text: textSuccess,
        //     //   customClass: {
        //     //     confirmButton: 'btn btn-success',
        //     //   },
        //     // });
        //     toast.success((t) => (
        //       <ToastContent t={t} title={titleSuccess} text={textSuccess} />
        //     ));
        //     return response.json();
        //   })
        //   .catch((error) => {
        //     // MySwal.fire({
        //     //   icon: 'error',
        //     //   title: `Ha ocurrido un error: ${error}`,
        //     //   customClass: {
        //     //     confirmButton: 'btn btn-primary',
        //     //   },
        //     // });
        //     toast.error((t) => (
        //       <ToastContent t={t} title={`Ha Ocurrido un error: ${error}`} />
        //     ));
        //   });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };

  return (
    <Button color={color} onClick={handleConfirmText}>
      {title}
    </Button>
  );
};

export default ButtonConfirmationAsync;
