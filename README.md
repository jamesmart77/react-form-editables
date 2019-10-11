# React Form Editable

A React component that easily allows inline editing! 

Currently supporting Editable Inputs. Simply hover over the component, if enabled, and click to enable editing. Once you're finished editing, click Submit and catch the new input value with a prop function. Voila!

### Setup
1. `npm install --save react-form-editables`
2. In your React component, import the Component and pass in the appropriate arguments. See example below.

### CRA Example
```jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { EditableInput } from 'react-form-editables';

class App extends Component {
    state = {
        textInputValue: "I am the original value",
    }

    handleSubmit = (event, updatedValue) => {
        event.preventDefault();
        console.log("Updated value: ", updatedValue);
        
        this.setState({ textInputValue: updatedValue })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                
                <EditableInput 
                    minInputLength={2}
                    value={this.state.textInputValue}
                    handleSubmit={this.handleSubmit}
                />
                
            </div>
        );
    }
}

export default App;
```

### Compoent Props
| Props          | Definition                                             | Required |
|----------------|--------------------------------------------------------|----------|
| minInputLength | Minimum character length for input value               | false    |
| value          | Text value to render when not editing                  | false    |
| handleSubmit   | Component function prop used to return new input value | true     |