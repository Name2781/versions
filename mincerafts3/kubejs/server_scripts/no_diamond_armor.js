EntityEvents.spawned(event => {
    let entity = event.entity;
    if (!entity) return;

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
  