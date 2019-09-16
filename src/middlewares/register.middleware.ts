import { Injectable, HttpStatus, NestMiddleware, Request, Response } from '@nestjs/common';

@Injectable()
export class RegisterMiddleware implements NestMiddleware {
    static verifyUserData(name, password) {
        const regexp = /^[a-z0-9_@.-]*$/i;
        const nameVerified = name.length >= 4 && name.length <= 60 && regexp.test(name);
        const passwordVerified = password.length >= 4 && password.length <= 100;

        return nameVerified && passwordVerified;
    }

    use(@Request() req, @Response() res, next: () => void) {
        const  { name, password } = req.body;
        if (!(req.body && name && password)) {
            return res.status(HttpStatus.FORBIDDEN).json({message: 'Login or password is empty!!!'});
        } else if (!RegisterMiddleware.verifyUserData(name, password)) {
            return res.status(HttpStatus.FORBIDDEN).json({message: 'Name or password incorrect!!!'});
        }
        next();
    }
}
