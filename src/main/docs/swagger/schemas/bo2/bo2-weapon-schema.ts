export const bo2WeaponSchema = {
    type: 'array',
    items: {
      properties: {
            name: {
              type: 'string'
            },
            weaponClass: {
              type: 'string'
            },
            damage: {
              type: 'string'
            },
            rateOfFire: {
              type: 'string'
            },
            magazineSize: {
              type: 'string'
            },
            startingAmmunition: {
              type: 'string'
            },
            maximumAmmunition: {
              type: 'string'
            },
            reloadTime: {
              type: 'string'
            },
            damageDropStart: {
              type: 'string'
            },
            damageDropEnd: {
              type: 'string'
            },
            recoil: {
              type: 'string'
            },
            penetration: {
              type: 'string'
            },
            unlocked: {
              type: 'string'
            },
            icon: {
              type: 'string'
            },
            hudIcon: {
              type: 'string'
            }
        }
    }
  }
  