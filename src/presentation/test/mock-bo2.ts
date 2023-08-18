import { mockBo2AttachmentModel } from '../../data/bo2/test/mock-attachment';
import { mockBo2GrenadeModel } from '../../data/bo2/test/mock-grenade';
import { mockBo2MapModel } from '../../data/bo2/test/mock-map';
import { mockBo2PerkModel } from '../../data/bo2/test/mock-perk';
import { mockBo2ScorestreakModel } from '../../data/bo2/test/mock-scorestreak';
import { Bo2AttachmentModel } from '../../domain/models/bo2/attachment';
import { Bo2GrenadeModel } from '../../domain/models/bo2/grenade';
import { Bo2MapModel } from '../../domain/models/bo2/map';
import { Bo2PerkModel } from '../../domain/models/bo2/perk';
import { Bo2ScorestreakModel } from '../../domain/models/bo2/scorestreak';
import { GetBo2AttachmentsContract } from '../../domain/usecases-contracts/bo2/get-attachments';
import { GetBo2GrenadesContract } from '../../domain/usecases-contracts/bo2/get-grenades';
import { GetBo2MapsContract } from '../../domain/usecases-contracts/bo2/get-maps';
import { GetBo2PerksContract } from '../../domain/usecases-contracts/bo2/get-perks';
import { GetBo2ScorestreaksContract } from '../../domain/usecases-contracts/bo2/get-scorestreaks';

export const mockGetBo2Attachments = (): GetBo2AttachmentsContract => {
	class GetBo2AttachmentsStub implements GetBo2AttachmentsContract {
		async get (): Promise<Bo2AttachmentModel[] | null>{
			return await Promise.resolve([mockBo2AttachmentModel()]);
		}
	}
	return new GetBo2AttachmentsStub();
};

export const mockGetBo2Grenades = (): GetBo2GrenadesContract => {
	class GetBo2GrenadesStub implements GetBo2GrenadesContract {
		async get (): Promise<Bo2GrenadeModel[] | null>{
			return await Promise.resolve([mockBo2GrenadeModel()]);
		}
	}
	return new GetBo2GrenadesStub();
};

export const mockGetBo2Maps = (): GetBo2MapsContract => {
	class GetBo2MapsStub implements GetBo2MapsContract {
		async get (): Promise<Bo2MapModel[] | null>{
			return await Promise.resolve([mockBo2MapModel()]);
		}
	}
	return new GetBo2MapsStub();
};

export const mockGetBo2Perks = (): GetBo2PerksContract => {
	class GetBo2PerksStub implements GetBo2PerksContract {
		async get (): Promise<Bo2PerkModel[] | null>{
			return await Promise.resolve([mockBo2PerkModel()]);
		}
	}
	return new GetBo2PerksStub();
};

export const mockGetBo2Scorestreaks = (): GetBo2ScorestreaksContract => {
	class GetBo2ScorestreaksStub implements GetBo2ScorestreaksContract {
		async get (): Promise<Bo2ScorestreakModel[] | null>{
			return await Promise.resolve([mockBo2ScorestreakModel()]);
		}
	}
	return new GetBo2ScorestreaksStub();
};