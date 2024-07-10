import {z} from "zod";
import {Address, CountryEnumType} from "@/lib/graphql/types.generated";

export const AddressSchema = z.object({
    company: z.string().optional(),
    salutation: z.string().min(1),
    firstname: z.string().min(1),
    lastname: z.string().min(1),
    street: z.string().min(1),
    number: z.string().min(1),
    city: z.string().min(1),
    postcode: z.string().min(1),
    country: z.nativeEnum(CountryEnumType),
    phoneNumber: z.string().min(1),
    termsAccepted: z.literal(true, {}),
});

export type AddressType = z.infer<typeof AddressSchema>;

export const CustomerSchema = z.object({
    salutation: z.string().min(1),
    gender: z.string().min(1),
    firstname: z.string().min(1),
    lastname: z.string().min(1),
    email: z.string().email(),
    address: AddressSchema
});

export type GuestCustomerType = z.infer<typeof CustomerSchema>;

export const MeSchema = z.object({
    salutation: z.string().min(1),
    gender: z.string().min(1),
    firstname: z.string().min(1),
    lastname: z.string().min(1),
    newsletterActive: z.boolean(),
});

export type MeSchemaType = z.infer<typeof MeSchema>;

