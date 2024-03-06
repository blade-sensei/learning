const {Shop, Item, Inventory} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should decrease sellIn at the end of the day", function() {
    const gildedRose = new Shop([new Item("foo", 1, 10), new Item("test", 3, 2)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(9);
    expect(items[1].sellIn).toBe(2);
    expect(items[1].quality).toBe(1);
  })

  it("should quality degrade 2 times faster if sellIn is greater than today", function() {
    const gildedRose = new Shop([new Item("foo", -2, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it("should quality never be negative", function() {
    const gildedRose = new Shop([new Item("foo", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("Aged Brie increases quality", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });

  it("quality is never >= 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("should not decrease quality for the Sulfuras item", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(20);
  });


  it("should not decrease sellIn for the Sulfuras item", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(10);
  });

  it(`should increase quality if item is ${Inventory.backstagePass}`, function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 12, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
  });

  it("should increase quality by 2 if item is Backstage passes to a TAFKAL80ETC concert and sellIn is <= 10", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20), new Item("Backstage passes to a TAFKAL80ETC concert", 9, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
    expect(items[1].quality).toBe(12);
  });

  it("should increase quality by 3 if item is Backstage passes to a TAFKAL80ETC concert  and sellIn is <= 5", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20), new Item("Backstage passes to a TAFKAL80ETC concert", 3, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
    expect(items[1].quality).toBe(13);
  });
  
  it("should quality == 0 if Backstage passes to a TAFKAL80ETC concert", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});


/**
 * Une fois que la date de péremption est passée, la qualité se dégrade deux fois plus rapidement. 🟢
 * La qualité (quality) d'un produit ne peut jamais être négative. 🟢
 * "Aged Brie" augmente sa qualité (quality) plus le temps passe.  🟢
 *  La qualité d'un produit n'est jamais de plus de 50. 🟢
 * "Sulfuras", étant un objet légendaire, n'a pas de date de péremption et ne perd jamais en qualité (quality) 🟢
 *  Test si sulfuras a un controle pour ne pas avoir de date de péremption 🟢
 * "Backstage passes", comme le "Aged Brie", augmente sa qualité (quality) plus le temps passe (sellIn) ; La qualité augmente de 2 quand il reste 10 jours ou moins et de 3 quand il reste 5 jours ou moins, mais la qualité tombe à 0 après le concert. 🟢
 * Aged Brie ? augmente avec les mêmes régles que le backstage ? 🟢
 * "Backstage passes", mais la qualité tombe à 0 après le concert.
 **/
