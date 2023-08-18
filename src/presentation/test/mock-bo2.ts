import { mockBo2AttachmentModel } from '../../data/bo2/test/mock-attachment';
import { mockBo2GrenadeModel } from '../../data/bo2/test/mock-grenade';
import { mockBo2MapModel } from '../../data/bo2/test/mock-map';
import { Bo2AttachmentModel } from '../../domain/models/bo2/attachment';
import { Bo2GrenadeModel } from '../../domain/models/bo2/grenade';
import { Bo2MapModel } from '../../domain/models/bo2/map';
import { GetBo2AttachmentsContract } from '../../domain/usecases-contracts/bo2/get-attachments';
import { GetBo2GrenadesContract } from '../../domain/usecases-contracts/bo2/get-grenades';
import { GetBo2MapsContract } from '../../domain/usecases-contracts/bo2/get-maps';

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