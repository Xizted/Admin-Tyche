import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import { useState } from 'react';
import classNames from 'classnames';

interface ButtonShowOffCanvasProps {
  title: string;
  color: string;
  canvasPlacementOffCanvas: 'start' | 'end' | 'top' | 'bottom';
  titleOffCanvas: string;
  Element: JSX.Element;
}

export const ButtonShowOffCanvas = ({
  title,
  color,
  canvasPlacementOffCanvas,
  titleOffCanvas,
  Element,
}: ButtonShowOffCanvasProps) => {
  const [canvasPlacement, setCanvasPlacement] = useState(
    canvasPlacementOffCanvas
  );
  const [canvasOpen, setCanvasOpen] = useState(false);

  const toggleCanvas = () => {
    setCanvasPlacement(canvasPlacementOffCanvas);
    setCanvasOpen(!canvasOpen);
  };

  return (
    <div>
      <Button color={color} onClick={toggleCanvas}>
        {title}
      </Button>
      <Offcanvas
        direction={canvasPlacement}
        isOpen={canvasOpen}
        toggle={toggleCanvas}
      >
        <OffcanvasHeader toggle={toggleCanvas} className='border-bottom'>
          {titleOffCanvas}
        </OffcanvasHeader>
        <OffcanvasBody>{Element}</OffcanvasBody>
      </Offcanvas>
    </div>
  );
};
