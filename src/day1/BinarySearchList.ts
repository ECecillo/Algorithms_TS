export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    do {
        let middle = Math.floor(low + (high - low) / 2);
        const midValue = haystack[middle];
        if (midValue === needle) return true;
        else if (needle > midValue) low = middle + 1;
        // We don't need to consider again the middle value so we add one to index search
        else if (needle < midValue) high = middle;
    } while (low < high);
    return false;
}
