import { GetBo2MapsContract } from '../../../../domain/usecases-contracts/bo2/get-maps';
import { Controller } from '../../../contracts/controller';
import { type HttpRequest, type HttpResponse } from '../../../contracts/http';
import { ok } from '../../../helpers/http/http-helper';

export class GetBo2MapsController extends Controller {
	constructor (
    private readonly getBo2Maps: GetBo2MapsContract
	) {
		super();
	}

	async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
		const { name, bundle } = httpRequest.query;
		const maps = await this.getBo2Maps.get({name, bundle});
		return ok(maps);
	}
}
