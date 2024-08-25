import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response-error";
import { CreateContactRequest, toContactResponse } from "../model/contact-model";
import { ContactValidation } from "../validation/contact-validation";
import { Validation } from "../validation/validation";

export class ContactService {

    static async create(request: CreateContactRequest) {

        const createRequest = Validation.validate(ContactValidation.CREATE, request);

        const totalContactWithSameEmail = await prismaClient.contact.count({
            where: {
                email: createRequest.email
            }
        });

        if (totalContactWithSameEmail) {
            throw new ResponseError(400, "Contact already exists");
        }

        createRequest.id = Math.floor(Math.random() * 1000000000);

        // const response = await prismaClient.contact.create({
        //     data: {
        //         id: createRequest.id,
        //         first_name: createRequest.first_name,
        //         last_name: createRequest.last_name,
        //         email: createRequest.email,
        //         phone: createRequest.phone
        //     }
        // });

        // if (!response) {
        //     throw new ResponseError(500, "Internal server error");
        // }

        // return toContactResponse(response);

    }

}