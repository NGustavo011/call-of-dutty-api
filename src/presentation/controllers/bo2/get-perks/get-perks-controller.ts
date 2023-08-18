import { GetBo2PerksContract } from '../../../../domain/usecases-contracts/bo2/get-perks';
import { Controller } from '../../../contracts/controller';
import { type HttpRequest, type HttpResponse } from '../../../contracts/http';
import { ok } from '../../../helpers/http/http-helper';

export class GetBo2PerksController extends Controller {
	constructor (
    private readonly getBo2Perks: GetBo2PerksContract
	) {
		super();
	}

	async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
		const { name, category } = httpRequest.query;
		const perks = await this.getBo2Perks.get({name, category});
		return ok(perks);
	}
}
