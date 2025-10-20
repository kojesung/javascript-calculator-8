class Calculator {
    sumListElements(list) {
        if (!Array.isArray(list)) {
            throw new Error('[ERROR] 배열이 아닙니다.');
        }

        if (!list.every((n) => typeof n === 'number' && !isNaN(n))) {
            throw new Error('[ERROR] 숫자가 아닌 요소가 있습니다.');
        }

        if (list.length === 0) {
            return 0;
        }
        return list.reduce((sum, currentValue) => sum + currentValue, 0);
    }
}

export default Calculator;
