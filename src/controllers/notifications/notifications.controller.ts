import { Controller, Get, Param } from '@nestjs/common';
import { NotificationsService } from '../../services/notifications/notifications.service';

@Controller('api/v1/notifications')
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) {}

    @Get()
    find(): string {
        return this.notificationsService.find();
    }

    @Get('mark/:id')
    mark(@Param() params): string {
        return this.notificationsService.mark(params);
    }

    @Get('mark-all')
    markAll(): string {
        return this.notificationsService.markAll();
    }

    @Get('test')
    test(): string {
        return this.notificationsService.test();
    }
}
