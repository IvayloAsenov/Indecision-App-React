class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleReset    = this.handleReset.bind(this);
        this.handleAddOne   = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
    }

    handleReset() {
        console.log("reset");
    }

    handleMinusOne() {
        console.log("minus");
    }

    handleAddOne() {
        console.log("add");
    }
    
    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();