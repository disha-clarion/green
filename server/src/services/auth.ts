import { Service, Inject } from 'typedi';
import jwt from 'jsonwebtoken';
import config from '../config';

@Service()
export default class AuthService {
  constructor(
    @Inject('logger') private logger
  ) { }

  public async Auth(): Promise<{ token: string }> {
    /**
 * We use verify from argon2 to prevent 'timing based' attacks
 */
    this.logger.silly('Generating JWT');
    const token = this.generateToken();
    /**
 * Easy as pie, you don't need passport.js anymore :)
 */
    return { token };
  }

  private generateToken() {
    const exp = Math.floor(Date.now() / 1000) + (60 * 120); // 120 minute expiration

    /**
     * A JWT means JSON Web Token, so basically it's a json that is _hashed_ into a string
     * The cool thing is that you can add custom properties a.k.a metadata
     * Beware that the metadata is public and can be decoded without _the secret_
     * but the client cannot craft a JWT to fake a userId
     * because it doesn't have _the secret_ to sign it
     * more information here: https://softwareontheroad.com/you-dont-need-passport
     */
    return jwt.sign(
      {
        exp: exp,
      },
      config.jwtSecret
    );
  }
}
