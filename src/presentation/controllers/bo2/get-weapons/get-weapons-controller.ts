import { GetBo2WeaponsContract } from '../../../../domain/usecases-contracts/bo2/get-weapons';
import { Controller } from '../../../contracts/controller';
import { type HttpRequest, type HttpResponse } from '../../../contracts/http';
import { ok } from '../../../helpers/http/http-helper';

export class GetBo2WeaponsController extends Controller {
	constructor (
    private readonly getBo2Weapons: GetBo2WeaponsContract
	) {
		super();
	}

	async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
		const { name } = httpRequest.query;
		const weapons = await this.getBo2Weapons.get({name});
		return ok(weapons);
	}
}
