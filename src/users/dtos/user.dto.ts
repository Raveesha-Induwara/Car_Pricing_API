/* eslint-disable prettier/prettier */
import { Expose } from 'class-transformer';

// Expose means specially do share this property
// Exclude means do not share this property

export class UserDto {
    @Expose()
    id: number;

    @Expose()
    email: string;
}