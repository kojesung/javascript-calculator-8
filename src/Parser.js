class Parser {
    parse(input) {
        if (!input) return []; // TODO null, undefined 예외처리
        if (input === '') return [];
        return this.extractNumbersString(input);
    }
    getCustomSeparator(input) {
        const match = input.match(/^\/\/(.+?)(?:\\n|\n)/);
        return match ? match[1] : null;
    }
    extractNumbersString(input) {
        const separator = this.getCustomSeparator(input);
        if (separator) {
            const numbersString = input.substring(input.indexOf('\\n') + 2);
            return numbersString.split(separator);
        }
        return input.split(/[,:]/);
    }
}

export default Parser;
