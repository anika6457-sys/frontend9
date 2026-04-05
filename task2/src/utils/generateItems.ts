export interface Item {
    id: number;
    title: string;
    description: string;
    category: string;
}

export function generateItems(count: number): Item[] {
    const categories = ["Category A", "Category B", "Category C"];
    const items: Item[] = [];
    for (let i = 1; i <= count; i++) {
        items.push({
            id: i,
            title: `Item ${i}`,
            description: `This is the description for item ${i}.`,
            category: categories[Math.floor(Math.random() * categories.length)],
        });
    }
    return items;
}