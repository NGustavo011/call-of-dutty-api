export const bo2WildcardSchema = {
    type: 'array',
    items: {
      properties: {
        name: {
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
  