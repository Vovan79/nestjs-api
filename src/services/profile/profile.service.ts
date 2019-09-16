import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
    findAll(): string {
        return 'This is a profile';
    }

    patch(): string {
        return 'This is a profile patching';
    }
}
