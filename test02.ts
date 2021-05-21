export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, quality, sellIn) {
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;
    };
};

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    };

    factoryItem(item: Item): any{
        switch(item.name){
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
        };
    };

    tick() {
        for (let i = 0; i < this.items.length; i++) {
            let item = this.factoryItem(this.items[i]);
            item.update();
        };
        return this.items;
    };
};


class ConjuredItem extends Item{
    name: string;
    sellIn: number;
    quality: number;
    constructor(name, quality, sellIn) {
        super(name, quality, sellIn);
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;
    };
    update(){
        if (this.quality > 0) {
            this.quality = this.quality - 1
        };
        this.sellIn = this.sellIn - 1;
        if (this.sellIn < 0) {
            if (this.quality > 0) {
                this.quality = this.quality - 1
            };
        };
    };
};

class ItemBrie extends ConjuredItem{
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, quality, sellIn){
        super(name, quality, sellIn);
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    };
    update(): void{
        if (this.quality < 50) {
            this.quality = this.quality + 1
        };
        this.sellIn = this.sellIn - 1;
        if (this.sellIn < 0) {
            if (this.quality < 50) {
                this.quality = this.quality + 1
            }
        };
    };
};

class ItemBackstage extends ConjuredItem{
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, quality, sellIn){
        super(name, quality, sellIn);
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    };
    update(): void{
        if (this.quality < 50) {
            this.quality = this.quality + 1;
            if (this.sellIn < 11) {
                if (this.quality < 50) {
                    this.quality = this.quality + 1
                }
            }
            if (this.sellIn < 6) {
                if (this.quality < 50) {
                    this.quality = this.quality + 1
                }
            };
        };
        this.sellIn = this.sellIn - 1;
        if (this.sellIn < 0) {
            this.quality = this.quality - this.quality
        };
    };
};

class ItemSulfuras extends ConjuredItem{
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, quality, sellIn){
        super(name, quality, sellIn);
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    };
    update(): void{};
};