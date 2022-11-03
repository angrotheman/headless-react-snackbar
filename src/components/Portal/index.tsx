import { createElement, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return createPortal(
    createElement('div', { id: 'snackbar-portal-root' }, children),
    document.body,
  );
};

export default Portal;
