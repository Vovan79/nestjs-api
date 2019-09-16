import {Injectable, Param} from '@nestjs/common';

@Injectable()
export class NotificationsService {
    find(): string {
        return 'This is notifications';
    }

    mark(@Param() params): string {
        return `This is a notification #${params.id}`;
    }

    markAll(): string {
        return 'This is all notifications';
    }

    test(): string {
        return 'This is a notification test';
    }
}
