import Text from './text.js';
import Input from './input.js';
import Answer from './answer.js';

class App { 
    constructor(message='duke') { 
        this.message = message;
        this.first = new Text('first');
        this.second = new Text('second');
        const listener =  e => console.log(e);
        this.firstInput = new Input('firstInput', listener);
        this.answer = new Answer();
        this.answerButton = Text.lookup('slow');
        this.getAnswer = this.getAnswer.bind(this);
        this.init();
    }

    init() { 
        this.first.content(`first content: ${this.message}`);
        this.second.content("another content");
        this.answerButton.onclick = this.getAnswer;
    }

    getAnswer() { 
        this.answer.answer().
            then(r => this.first.content(r)).
            catch(e => console.info(e));
    }

}

const exceptional = () => {  throw new Error('41') };
try {
    exceptional();
} catch (e) {
    console.log(`${e.message} -> ${e.stack}`);
    console.error(e);
} finally { 
    console.info("always executed");
}    

new App('java rocks');






