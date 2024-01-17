import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications.repository';

interface GetRecipientNotificationRequest {
  recipentId: string;
}

interface GetRecipientNotificationResponse {
  notifications: Notification[];
}

export class GetRecipientsNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientNotificationRequest,
  ): Promise<GetRecipientNotificationResponse> {
    const { recipentId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipentId);

    return {
      notifications,
    };
  }
}
