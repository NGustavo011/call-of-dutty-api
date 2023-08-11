export const bo2ScorestreakSchema = {
    type: 'array',
    items: {
      properties: {
        name: {
          type: 'string'
        },
        score: {
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
  