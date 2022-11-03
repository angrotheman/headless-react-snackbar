import { PropsWithChildren } from 'react';

import { Notification } from '../../context/snackbar/types';

/**
 * type for a single Snackbar
 */
export type SnackbarItem = React.FC<
  Required<Notification> & {
    onClose: () => void;
  }
>;

/**
 * type for the SnackbarWrapper
 */
export type SnackbarWrapper = React.FC<PropsWithChildren<unknown>>;
