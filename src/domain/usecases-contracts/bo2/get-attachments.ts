import { Bo2AttachmentModel } from '../../models/bo2/attachment';

export interface GetBo2AttachmentsContract {
  get: () => Promise<Bo2AttachmentModel[]>
}
