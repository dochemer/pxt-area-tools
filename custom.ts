
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: Creates a projectile that fires from an enemy at a player
     * @param enemy represents the enemy sprite
     * @param player represents the player sprite
     * @param speed represents the speed of the created projectile
     */
    //% block
    //% group ="Projectiles"
    export function enemyFireAtPlayer(enemy: Sprite, player: Sprite, speed:number): void {
        let dx = player.x - enemy.x
        let dy = player.y - enemy.y
        let distance = Math.sqrt(dx * dx + dy * dy)

        if (distance <= 0) return

        let vx = dx / distance * speed
        let vy = dy / distance * speed

        sprites.createProjectileFromSprite(img`
            2 2
            2 2
        `, enemy, vx, vy)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
