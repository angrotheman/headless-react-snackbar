import { useSnackbar } from '@/context';

import { SnackbarProvider } from './SnackbarProvider';
import { SnackbarItem, SnackbarWrapper } from './SnackbarProvider.props';

export default {
  title: 'Snackbar',
};

const BaseChild = () => {
  const { pushNotification } = useSnackbar();
  return (
    <button
      onClick={() =>
        pushNotification({
          message: 'Message',
          duration: 5000,
        })
      }
    >
      add notification
    </button>
  );
};

export const Default = () => {
  return (
    <SnackbarProvider>
      <BaseChild />
    </SnackbarProvider>
  );
};

//#region  /// Styled Example
const ChildrenExample: React.FC = () => {
  const { pushNotification } = useSnackbar();

  return (
    <>
      <button
        onClick={() =>
          pushNotification({
            message: `Test ${new Date().toLocaleTimeString()}`,
            status: 'default',
            //duration: 2000,
          })
        }
      >
        add default notification
      </button>
      <button
        onClick={() => {
          pushNotification({
            message: `Test ${new Date().toLocaleTimeString()}`,
            status: 'warning',
            // duration: 2000,
          });
        }}
      >
        add warning notification
      </button>
      <button
        onClick={() =>
          pushNotification({
            message: `Test ${new Date().toLocaleTimeString()}`,
            status: 'error',
            duration: 2000,
          })
        }
      >
        add error notification
      </button>
    </>
  );
};

const SingleSnackbar: SnackbarItem = ({ id, message, status, onClose }) => {
  const colors = {
    default: 'lightgrey',
    info: 'blue',
    success: 'green',
    warning: 'orange',
    error: 'red',
  };

  return (
    <div>
      {id} {message} {status}
      <button onClick={onClose} style={{ backgroundColor: colors[status] }}>
        ×
      </button>
    </div>
  );
};

const WrapperSnackbar: SnackbarWrapper = ({ children }) => (
  <div style={{ position: 'fixed', bottom: 0, right: 0 }}>{children}</div>
);

export const StyledExample = () => {
  return (
    <SnackbarProvider item={SingleSnackbar} wrapper={WrapperSnackbar}>
      <ChildrenExample />
    </SnackbarProvider>
  );
};
//#endregion
