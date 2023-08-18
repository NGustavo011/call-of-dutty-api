import { GetBo2AttachmentsContract } from '../../../../domain/usecases-contracts/bo2/get-attachments';
import { Controller } from '../../../contracts/controller';
import { type HttpRequest, type HttpResponse } from '../../../contracts/http';
import { ok } from '../../../helpers/http/http-helper';

export class GetBo2AttachmentsController extends Controller {
	constructor (
    private readonly getBo2Attachments: GetBo2AttachmentsContract
	) {
		super();
	}

	async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
		const { name, gunType } = httpRequest.query;
		const attachments = await this.getBo2Attachments.get({name, gunType});
		return ok(attachments);
	}
}
