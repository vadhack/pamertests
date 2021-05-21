import {GildedRose,Item} from "./test02"

let items: Array<Item> = [
	new Item("Aged Brie", 10, 5),
	new Item("Backstage passes to a TAFKAL80ETC concert", 10, 5),
	new Item("Sulfuras, Hand of Ragnaros", 10, 5),
	new Item("normal", 10, 5),
]; 

let store: GildedRose = new GildedRose(items);
store.tick();


