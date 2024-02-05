/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";
import { UserDto } from "src/users/dtos/user.dto";

export class SerializerInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
        // Run something before a request is handled by the request handler
        console.log('I am running before the handler ',context);

        return handler.handle().pipe(
            map((data: any) => {
                // Run something before the response is sent out
                console.log('I am running before response is sent out ',data)
            })
        );
    }
};
