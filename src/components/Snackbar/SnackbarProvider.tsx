import { Fragment, useEffect, useState } from 'react';

import { SnackbarContext } from '@/context/snackbar';
import { useSetupSnackbar } from '@/hooks/useSetupSnackbar';

import Portal from '../Portal';
import { SnackbarItem, SnackbarWrapper } from './SnackbarProvider.props';

export const SnackbarProvider: React.FC<
  React.PropsWithChildren<{ item?: SnackbarItem; wrapper?: SnackbarWrapper }>
> = ({
  children,
  item: Item = ({ message }) => <span>{message}</span>,
  wrapper: Wrapper = Fragment,
}) => {
  const { notifications, pushNotification, removeNotification } =
    useSetupSnackbar();

  const [isVisible, setIsVisibility] = useState(false);

  useEffect(() => {
    if (notifications.length) {
      setIsVisibility(true);
    } else {
      // if it was visible use a timeout for a smooth animation handling
      // TODO: FIND A BETTER WAY WHEN TO REMOVE AND USE A useMemo for it
      if (isVisible) {
        setTimeout(() => setIsVisibility(false), 250);
      }
    }
  }, [notifications, isVisible]);

  return (
    <>
      <SnackbarContext.Provider
        value={{ notifications, pushNotification, removeNotification }}
      >
        {children}

        {isVisible && (
          <Portal>
            <Wrapper>
              <ol tabIndex={-1}>
                {notifications.map((notification) => (
                  <li
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    tabIndex={1}
                    key={notification.id}
                    id={`toast-${notification.id}`}
                  >
                    <Item
                      {...{
                        status: 'default',
                        onClose: () => removeNotification(notification.id),
                        ...notification,
                      }}
                    />
                  </li>
                ))}
              </ol>
            </Wrapper>
          </Portal>
        )}
      </SnackbarContext.Provider>
    </>
  );
};
