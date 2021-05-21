"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test02_1 = require("./test02");
var items = [
    new test02_1.Item("Aged Brie", 10, 5),
    new test02_1.Item("Backstage passes to a TAFKAL80ETC concert", 10, 5),
    new test02_1.Item("Sulfuras, Hand of Ragnaros", 10, 5),
    new test02_1.Item("normal", 10, 5),
];
var store = new test02_1.GildedRose(items);
store.tick();
