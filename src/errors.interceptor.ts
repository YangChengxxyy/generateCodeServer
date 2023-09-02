import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(
    _: ExecutionContext,
    next: CallHandler,
  ): Observable<{ success: false; error: any }> {
    return next.handle().pipe(
      catchError(async (err) => {
        Logger.error(err.stack);
        return { success: false, error: err.stack };
      }),
    );
  }
}
