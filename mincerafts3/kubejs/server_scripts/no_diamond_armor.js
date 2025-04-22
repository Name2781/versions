EntityEvents.spawned(event => {
    let entity = event.entity;
    if (!entity) return;
    if (entity.id == "minecraft:falling_block") return;

    let headItem = entity.getHeadArmorItem();
    if (headItem && headItem.id === 'minecraft:diamond_helmet') {
        entity.setHeadArmorItem(Item.of('minecraft:iron_helmet'));
    }

    let chestItem = entity.getChestArmorItem();
    if (chestItem && chestItem.id === 'minecraft:diamond_chestplate') {
        entity.setChestArmorItem(Item.of('minecraft:iron_chestplate'));
    }

    let legItem = entity.getLegsArmorItem();
    if (legItem && legItem.id === 'minecraft:diamond_leggings') {
        entity.setLegsArmorItem(Item.of('minecraft:iron_leggings'));
    }

    let feetItem = entity.getFeetArmorItem();
    if (feetItem && feetItem.id === 'minecraft:diamond_boots') {
        entity.setFeetArmorItem(Item.of('minecraft:iron_boots'));
    }
});

MoreJSEvents.playerStartTrading((event) => {
    event.forEachOffers((o, i) => {
        let item = o.getOutput().getItem();
        if (item) {
            switch (item.id) {
                case "minecraft:diamond_helmet":
                    o.setOutput(Item.of('minecraft:iron_helmet'));
                    break;
                
                case "minecraft:diamond_chestplate":
                    o.setOutput(Item.of('minecraft:iron_chestplate'));
                    break;

                case "minecraft:diamond_leggings":
                    o.setOutput(Item.of('minecraft:iron_leggings'));
                    break;

                case "minecraft:diamond_boots":
                    o.setOutput(Item.of('minecraft:iron_boots'));
                    break;
            }
        }
    });
});

LootJS.modifiers((event) => {
    event.addLootTableModifier(/.*/).replaceLoot("minecraft:diamond_helmet", "minecraft:iron_helmet");
    event.addLootTableModifier(/.*/).replaceLoot("minecraft:diamond_chestplate", "minecraft:iron_chestplate");
    event.addLootTableModifier(/.*/).replaceLoot("minecraft:diamond_leggings", "minecraft:iron_leggings");
    event.addLootTableModifier(/.*/).replaceLoot("minecraft:diamond_boots", "minecraft:iron_boots");
}); 
 