class Calculator {
    sumListElements(list) {
        if (list.length === 0) {
            return 0;
        }
        return list.reduce((sum, currentValue) => sum + currentValue, 0);
    }
}

export default Calculator;
