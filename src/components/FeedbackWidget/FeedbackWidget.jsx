import React from 'react';
import Controls from './Controls';

class FeedbackWidget extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };
  // Перезаписываем состояние
  // increment = () => {
  //     this.setState({
  //         value: 999,
  //     })
  // }

  // Изменяем состояние
  increment = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  decrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <Controls
          initValue={this.state.value}
          onIncrement={this.increment}
          onDecrement={this.decrement}
        />
      </div>
    );
  }
}
export default FeedbackWidget;
