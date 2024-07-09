import { Injectable } from '@nestjs/common';
import { regions } from '@tanzania/regions';

@Injectable()
export class AppService {
  getData() {
    return regions();
  }
}
