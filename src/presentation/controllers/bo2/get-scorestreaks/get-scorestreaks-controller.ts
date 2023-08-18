import { GetBo2ScorestreaksContract } from '../../../../domain/usecases-contracts/bo2/get-scorestreaks';
import { Controller } from '../../../contracts/controller';
import { type HttpRequest, type HttpResponse } from '../../../contracts/http';
import { ok } from '../../../helpers/http/http-helper';

export class GetBo2ScorestreaksController extends Controller {
	constructor (
    private readonly getBo2Scorestreaks: GetBo2ScorestreaksContract
	) {
		super();
	}

	async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
		const { name } = httpRequest.query;
		const scorestreaks = await this.getBo2Scorestreaks.get({name});
		return ok(scorestreaks);
	}
}
