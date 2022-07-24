import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';

@Injectable()
export class DocumentService {
  getFakeData(){
    return of('Fake Data');
  }
}
