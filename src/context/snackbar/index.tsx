import { createContext, useContext } from 'react';

import { SnackbarContextProps } from './types';

export const SnackbarContext = createContext<SnackbarContextProps>({
  notifications: [],
  pushNotification: () => ({ id: -1 }),
  removeNotification: () => null,
});

export const useSnackbar = () => useContext(SnackbarContext);
