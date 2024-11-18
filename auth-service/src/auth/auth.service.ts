import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateOAuthLogin(profile: any): Promise<string> {
    const payload = { username: profile.username, sub: profile.id };
    return this.jwtService.sign(payload);
  }
}
