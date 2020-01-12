import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.handleClick.bind(this);
        this.state = {
            incorrectAnswer: false
        }
    }
    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
            this.setState(state => {
                return {
                    incorrectAnswer: false
                };
            });
        }
        else {
            this.setState(state => {
                return {
                    incorrectAnswer: true
                };
            })
        }
    }
    render() {
        return (
            <main>
                <section>
                    <p>
                        {this.props.quiz_question.instruction_text}
                    </p>
                </section>
                {this.state.incorrectAnswer ?
                    <div className="error">Sorry, that's not right </div> : null}
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer, index) => {
                            return (
                                <QuizQuestionButton key={index} button_text={answer} clickHandler={this.clickHandler} />
                            );
                        })}

                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion;