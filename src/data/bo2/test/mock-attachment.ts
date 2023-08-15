import { Bo2AttachmentModel } from '../../../domain/models/bo2/attachment';
import { GetBo2AttachmentsParams } from '../../../domain/usecases-contracts/bo2/get-attachments';
import { GetBo2AttachmentsRepository } from '../repositories-contracts/get-attachments-repository';

export const mockGetBo2AttachmentsParams = (): GetBo2AttachmentsParams => {
	return (
		{
			name: 'any_name',
			gunType: 'gun_type_2'
		}
	);
};

export const mockBo2AttachmentModel = (): Bo2AttachmentModel =>{
	return (
		{
			name: 'any_name',
			gunType: ['gun_type_1', 'gun_type_2'],
			icon: 'any_icon_url',
			unlockedAt: ['gun_type_1: lvl_x', 'gun_type_2: lvl_y']
		}
	);
};

export const mockGetBo2AttachmentsRepository = (): GetBo2AttachmentsRepository => {
	class GetBo2AttachmentsRepositoryStub implements GetBo2AttachmentsRepository {
		async get(): Promise<Bo2AttachmentModel[] | null>{
			return await Promise.resolve([mockBo2AttachmentModel()]);
		}
	}
	return new GetBo2AttachmentsRepositoryStub();
};