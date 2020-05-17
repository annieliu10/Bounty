import React from "react"
import UserInput from "./UserInput";
import Shopping from "./Shopping";

class Shopping1 extends React.Component {
    constructor(){
        super()
        this.state={
             first: " ",
            second: " ",
            third: " ",
            fourth: " ",
            fifth: " "
        }
    }
    render(){
        return(<div>
               <form className="popup">
        <label>
          First item:
          <input type="text" placeholder="Create first item ..." value={this.state.first} onChange={e => this.setState({first: e.target.value})} />
        </label>
        <br />
            
             <label>
         Second item:
          <input type="text" placeholder="Create second item..." value={this.state.second} onChange={e => this.setState({second: e.target.value})} />
        </label>
         <br />
            
        <label>
          Third item:
          <input type="text" placeholder="Create third item..." value={this.state.third} onChange={e => this.setState({third: e.target.value})} />
        </label>
          <br />
            
        <label>
          Fourth item:
          <input type="text" placeholder="Create fourth item..." value={this.state.fourth} onChange={e => this.setState({fourth: e.target.value})} />
        </label>
          <br />
            
            <label>
          Fifth item:
          <input type="text" placeholder="Create fifth item..." value={this.state.fifth} onChange={e => this.setState({fifth: e.target.value})} />
        </label>
        <br />
        <button>Submit</button>
              
          
      </form>
    <Shopping props={this.state} />

</div>
        
        
        )
    }
    
    
    
    
    
    
    
    
}










export default Shopping1