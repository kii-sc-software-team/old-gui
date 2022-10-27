import React from 'react';
import Child from './Child';
import Map from './Map'

class Parent extends React.Component {
    
    state = {
        name: "",
    }
  
    handleCallback = (childData) =>{
        this.setState({name: childData})
    }
  
    render(){
        const {name} = this.state;
        return(
            <div>
                <Child parentCallback = {this.handleCallback}/>
                {name}
                <Map/>
            </div>
        )
    }
}

export default Parent;