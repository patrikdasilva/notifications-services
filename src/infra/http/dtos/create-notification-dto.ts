import { IsNotEmpty, Length } from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty()
  recipientId: string;

  @IsNotEmpty({
    message: 'Notificação não pode ser vazia',
  })
  @Length(5, 255)
  content: string;

  @IsNotEmpty({
    message: 'Notificação não pode ser vazia',
  })
  @IsNotEmpty({
    message: 'Categoria não pode ser vazia',
  })
  category: string;
}
