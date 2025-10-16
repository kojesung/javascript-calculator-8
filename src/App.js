import { Console } from '@woowacourse/mission-utils';
import Parser from './Parser.js';
import Calculator from './Calculator.js';

class App {
    constructor() {
        this.parser = new Parser();
        this.calculator = new Calculator();
    }
    async run() {
        const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
        const parsingResult = this.parser.parse(input);
        const calculateResult = this.calculator.sumListElements(parsingResult);
        Console.print(`결과 : ${calculateResult}`);
    }
}

export default App;
