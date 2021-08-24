import React from 'react';
import { Top } from "./components/Top";
import ItemList from "./components/ItemList";
import ItemAdd from "./components/ItemAdd";

class App extends React.Component {
  render() {
    return (
      <div className='first-page'>
        <Top />
        <ItemList />
        <ItemAdd />
      </div>
    )
  }
}

export { App }
