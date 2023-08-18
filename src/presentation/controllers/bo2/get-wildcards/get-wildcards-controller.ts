import { GetBo2WildcardsContract } from '../../../../domain/usecases-contracts/bo2/get-wildcards';
import { Controller } from '../../../contracts/controller';
import { type HttpRequest, type HttpResponse } from '../../../contracts/http';
import { ok } from '../../../helpers/http/http-helper';

export class GetBo2WildcardsController extends Controller {
	constructor (
    private readonly getBo2Wildcards: GetBo2WildcardsContract
	) {
		super();
	}

	async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
		const { name } = httpRequest.query;
		const wildcards = await this.getBo2Wildcards.get({name});
		return ok(wildcards);
	}
}
