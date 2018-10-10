import React,{Component} from 'react';



class Card extends Component {
    render(){
      return(
          <div className="tc bg-light-green dib br3 bv3 ma2 grow bw2 shadow-5">
            <img  alt='robotos' src={`https://robohash.org/${this.props.id}?100x100`} />
            <div>
               <h2>{this.props.name}</h2>
               <p>{this.props.email}</p>
            </div>
          </div>
      );
    }
}

export default Card;
