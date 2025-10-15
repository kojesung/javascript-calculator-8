class Parser {
    parse(input) {
        if (!input) return []; // TODO null, undefined 예외처리
        if (input === '') return [];
        return this.getCustomSeparator(input);
    }
    getCustomSeparator(input) {
        const match = input.match(/^\/\/(.+?)(?:\\n|\n)/);
        return match ? match[1] : null;
    }
}

export default Parser;
