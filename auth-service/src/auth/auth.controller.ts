import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @UseGuards(AuthGuard('oauth2'))
  async login() {
    // Redirects to OAuth provider for login
  }

  @Get('callback')
  @UseGuards(AuthGuard('oauth2'))
  async callback(@Req() req, @Res() res) {
    const jwtToken = await this.authService.validateOAuthLogin(
      req.user.profile,
    );
    return res.redirect(`http://localhost:3000?token=${jwtToken}`);
  }
  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  getProtectedData() {
    return { message: 'This is a protected route' };
  }
}
