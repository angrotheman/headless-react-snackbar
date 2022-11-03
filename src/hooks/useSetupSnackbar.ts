import { useState } from 'react';

import {
  Notification,
  PushNotification,
  RemoveNotification,
} from '../context/snackbar/types';

let id = 0;

export const useSetupSnackbar = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const removeNotification: RemoveNotification = (notificationId) => {
    setNotifications((old) =>
      old.filter((notification) => notification.id !== notificationId),
    );
  };

  const pushNotification: PushNotification = ({
    message,
    duration,
    status = 'default',
  }) => {
    id += 1;
    const genId = id;

    const newNotification: Notification = {
      id: genId,
      message,
      status,
    };

    setNotifications((old) => [...old, newNotification]);

    if (duration) {
      setTimeout(() => {
        removeNotification(genId);
      }, duration);
    }

    return { id: genId };
  };

  return { notifications, pushNotification, removeNotification };
};
