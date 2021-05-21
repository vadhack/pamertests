"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GildedRose = exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(name, quality, sellIn) {
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;
    }
    ;
    return Item;
}());
exports.Item = Item;
;
var GildedRose = /** @class */ (function () {
    function GildedRose(items) {
        if (items === void 0) { items = []; }
        this.items = items;
    }
    ;
    GildedRose.prototype.factoryItem = function (item) {
        switch (item.name) {
            case "Aged Brie":
                return new ItemBrie(item.name, item.quality, item.sellIn);
                break;
            case "Sulfuras, Hand of Ragnaros":
                return new ItemSulfuras(item.name, item.quality, item.sellIn);
                break;
            case "Backstage passes to a TAFKAL80ETC concert":
                return new ItemBackstage(item.name, item.quality, item.sellIn);
                break;
            default:
                return new ConjuredItem(item.name, item.quality, item.sellIn);
        }
        ;
    };
    ;
    GildedRose.prototype.tick = function () {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.factoryItem(this.items[i]);
            item.update();
        }
        ;
        return this.items;
    };
    ;
    return GildedRose;
}());
exports.GildedRose = GildedRose;
;
var ConjuredItem = /** @class */ (function (_super) {
    __extends(ConjuredItem, _super);
    function ConjuredItem(name, quality, sellIn) {
        var _this = _super.call(this, name, quality, sellIn) || this;
        _this.name = name;
        _this.quality = quality;
        _this.sellIn = sellIn;
        return _this;
    }
    ;
    ConjuredItem.prototype.update = function () {
        if (this.quality > 0) {
            this.quality = this.quality - 1;
        }
        ;
        this.sellIn = this.sellIn - 1;
        if (this.sellIn < 0) {
            if (this.quality > 0) {
                this.quality = this.quality - 1;
            }
            ;
        }
        ;
    };
    ;
    return ConjuredItem;
}(Item));
;
var ItemBrie = /** @class */ (function (_super) {
    __extends(ItemBrie, _super);
    function ItemBrie(name, quality, sellIn) {
        var _this = _super.call(this, name, quality, sellIn) || this;
        _this.name = name;
        _this.sellIn = sellIn;
        _this.quality = quality;
        return _this;
    }
    ;
    ItemBrie.prototype.update = function () {
        if (this.quality < 50) {
            this.quality = this.quality + 1;
        }
        ;
        this.sellIn = this.sellIn - 1;
        if (this.sellIn < 0) {
            if (this.quality < 50) {
                this.quality = this.quality + 1;
            }
        }
        ;
    };
    ;
    return ItemBrie;
}(ConjuredItem));
;
var ItemBackstage = /** @class */ (function (_super) {
    __extends(ItemBackstage, _super);
    function ItemBackstage(name, quality, sellIn) {
        var _this = _super.call(this, name, quality, sellIn) || this;
        _this.name = name;
        _this.sellIn = sellIn;
        _this.quality = quality;
        return _this;
    }
    ;
    ItemBackstage.prototype.update = function () {
        if (this.quality < 50) {
            this.quality = this.quality + 1;
            if (this.sellIn < 11) {
                if (this.quality < 50) {
                    this.quality = this.quality + 1;
                }
            }
            if (this.sellIn < 6) {
                if (this.quality < 50) {
                    this.quality = this.quality + 1;
                }
            }
            ;
        }
        ;
        this.sellIn = this.sellIn - 1;
        if (this.sellIn < 0) {
            this.quality = this.quality - this.quality;
        }
        ;
    };
    ;
    return ItemBackstage;
}(ConjuredItem));
;
var ItemSulfuras = /** @class */ (function (_super) {
    __extends(ItemSulfuras, _super);
    function ItemSulfuras(name, quality, sellIn) {
        var _this = _super.call(this, name, quality, sellIn) || this;
        _this.name = name;
        _this.sellIn = sellIn;
        _this.quality = quality;
        return _this;
    }
    ;
    ItemSulfuras.prototype.update = function () { };
    ;
    return ItemSulfuras;
}(ConjuredItem));
;
