import { sign } from 'jsonwebtoken';

export function createToken(
  email: string,
  password: string,
  name: string,
): string {
  const token = sign({ email, password, name }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1h',
  });

  return token;
}
