import { useEffect, useState } from 'react';
import { ArrowLeft } from 'react-feather';
import { useNavigate, useParams } from 'react-router-dom';
import { Badge, Button, Card, CardBody, CardHeader } from 'reactstrap';
import { data } from '..';
import GeneralInformation from './GeneralInformation';
import UILoading from '@components/spinner/UILoading';
import AttachedDocuments from './AttachedDocuments';
import Actions from './Actions';

enum Status {
  approved = 1,
  denied = 2,
  reversed = 3,
}

const LenderDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [lender, setLender] = useState<undefined | {}>(undefined);
  useEffect(() => {
    setLender(data.find((l) => l.id === +id!)!);
  }, []);

  if (!lender) return <UILoading />;
  if (!lender) return navigate('/error');

  return (
    <div>
      <Card>
        <CardHeader>
          <div className='d-flex justify-content-between align-items-center w-100'>
            <Button
              color='flat-primary'
              className='btn-icon rounded-circle'
              onClick={() => navigate(-1)}
            >
              <ArrowLeft />
            </Button>
            <Badge
              color={
                !lender.status
                  ? 'secondary'
                  : lender.status === 1
                  ? 'success'
                  : lender.status === 2
                  ? 'danger'
                  : 'warning'
              }
            >
              {!lender.status
                ? 'Pendiente'
                : lender.status === 1
                ? 'Aprobado'
                : lender.status === 2
                ? 'Denegado'
                : 'Reversado'}
            </Badge>
          </div>
        </CardHeader>
        <CardBody>
          <GeneralInformation />
          <AttachedDocuments />
          {!lender.status && <Actions id={id} />}
        </CardBody>
      </Card>
    </div>
  );
};

export default LenderDetail;
