import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../repositories/notifications.repository';
import { NotificationNotFound } from '../errors/notification-not-found';

interface UnreadNotificationRequest {
  id: string;
}

type UneadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: UnreadNotificationRequest,
  ): Promise<UneadNotificationResponse> {
    const { id } = request;

    const notification = await this.notificationsRepository.findById(id);

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationsRepository.save(notification);
  }
}
