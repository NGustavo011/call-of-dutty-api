import { prisma } from '../../../main/config/prisma';

export const mockPrismaBo2Attachments = async (): Promise<void> => {
	await prisma.bo2Attachment.createMany({
		data: [
			{
				id: '1',
				icon: 'icon_url_1',
				name: 'name_1',
				gunType: ['type_1', 'type_2'],
				unlockedAt: ['type_1 lvl_1', 'type_2 lvl_2']
			},
			{
				id: '2',
				icon: 'icon_url_2',
				name: 'name_2',
				gunType: ['type_2', 'type_4'],
				unlockedAt: ['type_2 lvl_2', 'type_4 lvl_4']
			}
		]
	});
};