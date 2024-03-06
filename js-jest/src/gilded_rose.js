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

  defaultDecrementQuality(item) {
    if (item.quality > 0) {
      //cette condition risque de poser probleme. peut être il faut l extraire ailleurs
      if (item.name != this.sulfuras) {
        item.quality = item.quality - 1;
      }
    }
  }

  isVintageItem(item) {
    return item.name == this.agedBrie || item.name == this.backstagePass
  }

  incrementQuality(item) {
    item.quality = item.quality + 1;
  }

  isItemExpired(item) {
    return item.sellIn < 0
  }

  canIncrementQuality(item) {
    return item.quality < this.maxQuality
  }

  isInExpirableItem(item) {
    return item.name == this.sulfuras
  }

  updateQuality() {
    for (const item of this.items) {
      //inverse le if et le else pour avoir if (this.isItemThatIncreaseValueWhenIsOld) ? 
      //peut être plus lisible
      if (this.isVintageItem(item)) {
        //securité pour ne pas dépasser la limite max
        if (this.canIncrementQuality(item)) {
          //a améliorer ou refacto cette partie
          if (this.isAgeBrieItem(item)) {
            this.incrementQuality(item)
          }
          if (this.isBackStagePassItem(item)) {
            this.incrementQuality(item)
            item.quality = this.getQualityForBackstagePass(item);
          }
        }
      }
      //faire la distinction entre classics iteams et sulfuras
      else {
        this.defaultDecrementQuality(item);
      } 

      //gene iteam au mieu de rien
      if (!this.isInExpirableItem(item)) {
        item.sellIn = item.sellIn - 1;
      }

      //fonction manageExpiredItem -> voir une class
      if (this.isItemExpired(item)) {
        //funciton is age abri
        if (this.isAgeBrieItem(item)) {
          //rajouter un test pour assurer qu on passe par incrementQuality en ayant un boolean
          if (this.canIncrementQuality(item)) {
            this.incrementQuality(item)
          }
        }
        else {
          if (this.isBackStagePassItem(item))
          this.makeBackstagePassUnusable(item);
          else {
            this.defaultDecrementQuality(item)
          }
        }
      }
    }

    return this.items;
  }

  isBackStagePassItem(item) {
    return item.name === this.backstagePass;
  }

  isAgeBrieItem(item) {
    return item.name === this.agedBrie;
  }

  makeBackstagePassUnusable(item) {
    item.quality = 0;
  }

  //peut etre faire une class BackStagePass qui prend un iteam et qui calcul le quality
  getQualityForBackstagePass(item) {
    let quality = item.quality;
    if (item.sellIn < this.almostLastMinutePass) {
      if (quality < this.maxQuality) {
        quality = quality + 1;
      }
    }
    if (item.sellIn < this.lastMinutePass) {
      if (quality < this.maxQuality) {
        quality = quality + 1;
      }
    }

    return quality;
  }
}

module.exports = {
  Item,
  Shop,
  Inventory,
};

//replacer le for par un switch -> items -> pollyphormis
//Item Brige