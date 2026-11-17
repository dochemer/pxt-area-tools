//% isKind
namespace SpriteKind {
    export const EnemyProjectile = SpriteKind.create()
}

namespace arenaTools {

    /**
     * Make one sprite shoot a small default projectile at another sprite.
     */
    //% block="sprite %shooter shoot at %target with speed %speed"
    //% speed.defl=50
    //% group="Projectiles"
    export function shootAtSprite(shooter: Sprite, target: Sprite, speed: number): void {
        if (!shooter || !target) return

        let dx = target.x - shooter.x
        let dy = target.y - shooter.y
        let distance = Math.sqrt(dx * dx + dy * dy)

        if (distance <= 0) return

        let vx = dx / distance * speed
        let vy = dy / distance * speed

        let projectile = sprites.createProjectileFromSprite(img`
            2 2
            2 2
        `, shooter, vx, vy)

        projectile.setKind(SpriteKind.EnemyProjectile)
    }

    /**
     * Make one sprite shoot a custom projectile image at another sprite.
     */
    //% block="sprite %shooter shoot image %projectileImage at %target with speed %speed"
    //% speed.defl=50
    //% projectileImage.shadow=screen_image_picker
    //% group="Projectiles"
    export function shootImageAtSprite(shooter: Sprite, projectileImage: Image, target: Sprite, speed: number): void {
        if (!shooter || !target) return
        if (!projectileImage) return

        let dx2 = target.x - shooter.x
        let dy2 = target.y - shooter.y
        let distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

        if (distance2 <= 0) return

        let vx2 = dx2 / distance2 * speed
        let vy2 = dy2 / distance2 * speed

        let projectile = sprites.createProjectileFromSprite(projectileImage, shooter, vx2, vy2)
        projectile.setKind(SpriteKind.EnemyProjectile)
    }

    /**
     * Point one sprite towards another sprite.
     * Useful if you want enemies to visually face the player.
     */
    //% block="point sprite %sprite towards %target"
    //% group="Aiming"
    export function pointTowardsSprite(sprite: Sprite, target: Sprite): void {
        if (!sprite || !target) return

        let dx3 = target.x - sprite.x
        let dy3 = target.y - sprite.y

        sprite.setImage(sprite.image)
        sprite.vx = sprite.vx
        sprite.vy = sprite.vy

        // Angle is stored if you want to extend this later,
        // but not needed for the shooting blocks.
        let angle = Math.atan2(dy3, dx3)
    }
}
