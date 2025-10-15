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
            return this.convertStringToNumbers(numbersString.split(separator));
        }
        return this.convertStringToNumbers(input.split(/[,:]/));
    }
    convertStringToNumbers(numberStrings) {
        return numberStrings.map((str) => Number(str)); // TODO 숫자가 아닌 값이 포함되어 있을 때 예외처리
    }
}

export default Parser;
