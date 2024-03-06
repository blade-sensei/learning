const Inventory ={
  backstagePass: "Backstage passes to a TAFKAL80ETC concert",
  agedBrie: "Aged Brie",
  sulfuras: "Sulfuras, Hand of Ragnaros",
}

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  maxQuality = 50;
  lastMinutePass = 6;
  almostLastMinutePass = 11;

  backstagePass = Inventory.backstagePass;
  agedBrie = Inventory.agedBrie;
  sulfuras = Inventory.sulfuras;

  defaultUpdateQuality(item) {
    if (item.quality > 0) {
      if (item.name != this.sulfuras) {
        item.quality = item.quality - 1;
      }
    }
  }

  isItemThatIncreaseValueWhenIsOld(item) {
    return item.name == this.agedBrie || item.name == this.backstagePass
  }


  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (!this.isItemThatIncreaseValueWhenIsOld(item)) {
        this.defaultUpdateQuality(item);
      } else {
        if (item.quality < this.maxQuality) {
          item.quality = item.quality + 1;
          if (item.name == this.backstagePass) {
            if (item.sellIn < this.almostLastMinutePass) {
              if (item.quality < this.maxQuality) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < this.lastMinutePass) {
              if (item.quality < this.maxQuality) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
      if (item.name != this.sulfuras) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != this.agedBrie) {
          if (item.name != this.backstagePass) {
            if (item.quality > 0) {
              if (item.name != this.sulfuras) {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < this.maxQuality) {
            item.quality = item.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
  Inventory,
};
