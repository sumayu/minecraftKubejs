ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:crafting_table' });
  event.shaped('minecraft:crafting_table', [
    'aaa',
    'aba',
    'aaa'
  ], {
    a: 'minecraft:stick',
    b: { tag: 'minecraft:planks' }
  });
});
let tickCounter = 0;
const DELAY_TICKS = 100 ; 
PlayerEvents.tick(event => {
        let player = event.player;
        let x = player.x.toFixed(2); 
        let z = player.z.toFixed(2);
        if (player.x >= 0 && player.x <= 10 && player.z >= 0 && player.z <= 10) {
         tickCounter++; 
    if (tickCounter >= DELAY_TICKS) {
        event.player.potionEffects.add('minecraft:regeneration', 600, 0); 
        tickCounter = 0;
    }
        }
});
