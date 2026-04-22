import React from "react";


class UserClass extends React.Component{
    constructor(props){

     
      super(props)
      this.state={
        userInfo:{
        name:'name',
        
        avatar_url:"hb"

        }
    }
   
    }
    async componentDidMount(){
         const data=await fetch("https://github.com/pawan-thakuni-au45/foodieapp")
         const json=await data.json()
         
         this.setState({
          
            userInfo:json,
           
         })
         console.log('github',json);
         
    }
   
   

    render(props){
       
        const {name,avatar_url }=this.state.userInfo
        return(
            <div className="item-center">
            <h1 className="name-con">{name}</h1>
    
            <h4 className="font-bold">git hub link for this project</h4><a href="https://github.com/pawan-thakuni-au45/foodieapp"  target="_blank" rel="noreferrer" className="bg-red" >Click on me 😂 </a>
            <img className="m-auto w-3/12" alt="img" src={avatar_url }></img>

            
    
          
            </div>
        )
    }
}
export default UserClass