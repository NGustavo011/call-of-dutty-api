import { GetBo2GrenadesContract } from '../../../../domain/usecases-contracts/bo2/get-grenades';
import { Controller } from '../../../contracts/controller';
import { type HttpRequest, type HttpResponse } from '../../../contracts/http';
import { ok } from '../../../helpers/http/http-helper';

export class GetBo2GrenadesController extends Controller {
	constructor (
    private readonly getBo2Grenades: GetBo2GrenadesContract
	) {
		super();
	}

	async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
		const { name, type } = httpRequest.query;
		const grenades = await this.getBo2Grenades.get({name, type});
		return ok(grenades);
	}
}
