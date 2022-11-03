type NotificationStatus = 'info' | 'success' | 'warning' | 'error' | 'default';

export type Notification = {
  id: string | number;
  message: string;
  status?: NotificationStatus;
};

export type NotificationWithoutId = Omit<Notification, 'id'>;

export type PushNotification = (
  pushNotification: NotificationWithoutId & {
    duration?: number;
  },
) => { id: Notification['id'] };

export type RemoveNotification = (notificationId: Notification['id']) => void;

export type SnackbarContextProps = {
  notifications: Notification[];
  pushNotification: PushNotification;
  removeNotification: RemoveNotification;
};
