// count - setup default prop value to 0

class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleReset    = this.handleReset.bind(this);
        this.handleAddOne   = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);

        this.state = {
            count: props.count
        };
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter count={55}/>, document.getElementById('app'));
