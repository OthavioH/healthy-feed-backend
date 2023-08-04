import { Injectable, NestMiddleware } from '@nestjs/common';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const token = req.headers['authorization'];

    if (!token) {
      throw new Error('No token provided');
    }

    const decoded = verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      throw new Error('Invalid token');
    }

    next();
  }
}
