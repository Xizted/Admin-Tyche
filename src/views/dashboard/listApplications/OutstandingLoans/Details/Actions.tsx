import ButtonConfirmationAsync from '@src/@core/components/button-confirmation-async';
import { ButtonShowOffCanvas } from '@src/@core/components/button-show-offCanvas';
import { Button, Form } from 'reactstrap';
import ReversalForm from './ReversalForm';

interface ActionsProps {
  id?: string;
}

const Actions = ({ id }: ActionsProps) => {
  return (
    <div className='d-flex justify-content-end mt-5 gap-3'>
      <ButtonConfirmationAsync
        title='Denegar'
        color='danger'
        titleWarning='¿Estás seguro de que desea denegar esta solicitud?'
        textSuccess='Esta solicitud ha sido denegada con éxito'
        titleSuccess='Solicitud Denegada'
        onSubmit={() => {}}
      />
      <ButtonShowOffCanvas
        color='warning'
        canvasPlacementOffCanvas='end'
        title='Reversar'
        Element={<ReversalForm />}
        titleOffCanvas={'Reversar Solicitud'}
      />
      <ButtonConfirmationAsync
        title='Aprobar'
        color='success'
        titleWarning='¿Estás seguro de que desea aprobar esta solicitud?'
        textSuccess='Esta solicitud ha sido aprobada con éxito'
        titleSuccess='Solicitud Aprobada'
        onSubmit={() => {}}
      />
    </div>
  );
};

export default Actions;
