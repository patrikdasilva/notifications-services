import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotification } from '@application/use-cases/send/send-notification';
import { DataBaseModule } from '../database/database.module';
import { CancelNotification } from '@application/use-cases/cancel/cancel-notification';
import { CountRecipientsNotifications } from '@application/use-cases/count/count-recipient-notifications';
import { GetRecipientsNotifications } from '@application/use-cases/get-recipient/get recipient-notification';
import { ReadNotification } from '@application/use-cases/read/read-notification';
import { UnreadNotification } from '@application/use-cases/unread/unread-notification';

@Module({
  imports: [DataBaseModule],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientsNotifications,
    GetRecipientsNotifications,
    ReadNotification,
    UnreadNotification,
  ],
  controllers: [NotificationsController],
})
export class HttpModule {}
