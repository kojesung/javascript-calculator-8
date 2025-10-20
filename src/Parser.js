class Parser {
    parse(input) {
        if (input === null || input === undefined) {
            throw new Error('[ERROR] 입력값이 null 또는 undefined입니다.');
        }
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
        return numberStrings.map((str) => {
            const num = Number(str);

            if (isNaN(num)) {
                throw new Error('[ERROR] 숫자가 아닌 값이 포함되어 있습니다.');
            }

            if (num < 0) {
                throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
            }

            return num;
        });
    }
}

export default Parser;
