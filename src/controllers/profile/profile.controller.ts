import { Controller, Get, Patch } from '@nestjs/common';
import { ProfileService } from '../../services/profile/profile.service';

@Controller('api/v1/profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Get()
    findAll(): string {
        return this.profileService.findAll();
    }

    @Patch()
    patch(): string {
        return this.profileService.patch();
    }
}
