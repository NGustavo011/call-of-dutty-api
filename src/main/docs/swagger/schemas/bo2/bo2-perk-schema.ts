export const bo2PerkSchema = {
    type: 'array',
    items: {
      properties: {
        name: {
          type: 'string'
        },
        category: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        unlockedAt: {
          type: 'string'
        },
        icon: {
          type: 'string'
        }
      }
    }
  }
  