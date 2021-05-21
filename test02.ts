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

    tick() {
        for (let i = 0; i < this.items.length; i++) {
            let item: Conjured = new Conjured(this.items[i]);
            if (!item.is_brie && !item.is_backstage) {
                item.downgrade();
            }else{
                item.upgrade();
                if (item.is_backstage) {
                    if (item.sellIn < 11) {
                        item.upgrade();
                    }
                    if (item.sellIn < 6) {
                        item.upgrade();
                    }
                };
            };
            item.downgrade_sellin(item);
        }
        return this.items;
    };
};


class Conjured extends Item{
    name: string;
    sellIn: number;
    quality: number;
    is_brie: boolean;
    is_backstage: boolean;

    constructor(item: Item){
        this.name = item.name;
        this.sellIn = item.sellIn;
        this.quality = item.quality;
        this.is_brie = item.name == 'Aged Brie';
        this.is_backstage = item.name == 'Backstage passes to a TAFKAL80ETC concert';
    };
    upgrade(): void {
        if(this.quality < 50){
            this.quality = this.quality + 1;
        };
    };

    downgrade(): void {
        if(this.name == 'Sulfuras, Hand of Ragnaros') return;
        if(this.quality > 0){
            this.quality = this.quality - 1;
        };
    };

    downgrade_sellin(): void {
        if(this.name == 'Sulfuras, Hand of Ragnaros') return;
        this.sellIn = this.sellIn - 1;
        if(this.sellIn < 0) {
            if (!this.is_brie) {
                if (!this.is_backstage) {
                    this.downgrade();
                } else {
                    this.quality = this.quality - this.quality
                }
            } else {
                this.upgrade();
            }
        }
    };
};
