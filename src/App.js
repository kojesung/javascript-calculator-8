import { Console } from '@woowacourse/mission-utils';
import Parser from './Parser.js';

class App {
    constructor() {
        this.parser = new Parser();
    }
    async run() {
        const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
        const parsingResult = this.parser.parse(input);
        Console.print(`결과 : ${parsingResult}`);
    }
}

export default App;
