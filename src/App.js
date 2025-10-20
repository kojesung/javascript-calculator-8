import { Console } from '@woowacourse/mission-utils';
import Parser from './Parser.js';
import Calculator from './Calculator.js';

class App {
    async run() {
        try {
            const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
            const numbers = Parser.parse(input);
            const result = Calculator.sumListElements(numbers);
            Console.print(`결과 : ${result}`);
        } catch (error) {
            Console.print(error.message);
            throw error;
        }
    }
}

export default App;
