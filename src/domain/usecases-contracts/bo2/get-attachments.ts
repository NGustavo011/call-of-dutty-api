import { Bo2AttachmentModel } from '../../models/bo2/attachment';

export interface GetBo2AttachmentsParams {
  name?: string
  gunType?: string
}

export interface GetBo2AttachmentsContract {
  get: (getBo2AttachmentsParams: GetBo2AttachmentsParams) => Promise<Bo2AttachmentModel[] | null>
}
