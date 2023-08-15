import { Bo2AttachmentModel } from '../../../domain/models/bo2/attachment';
import { GetBo2AttachmentsParams } from '../../../domain/usecases-contracts/bo2/get-attachments';

export interface GetBo2AttachmentsRepository{
    get: (getBo2AttachmentsParams: GetBo2AttachmentsParams) => Promise<Bo2AttachmentModel[] | null>
}