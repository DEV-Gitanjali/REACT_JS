import { Component } from "react";



class MovieCard extends Component{

    constructor(){
        super();
        this.state={
            title:"The Avengers" ,
            plot:"supernatural powers shown in the movie",
            price:199,
            rating:8.9,
            stars:0

        }
        // this.addStars = this.addStars.bind(this);
    }

    addStars=()=> {
      //forms 
        // this.setState({
        //     stars:this.state.stars +0.5
        // });

        // second form 
        this .setState((prevState)=>{
            return{
             stars:prevState.stars + 0.5
            }
        });

        
        // this.state.stars +=0.5;
        // console.log("this.state.stars " , this.state.stars);
    }
    render(){
        const {title,plot,price,rating,stars}  = this.state;
          
        return(
            <div className="main">
                <div class="movie-card">
                    <div className="left">
                        <img alt="poster" src="https://media.istockphoto.com/id/1271634341/photo/teamwork-of-business-concept-group-of-businessperson-human-resources.webp?b=1&s=170667a&w=0&k=20&c=4UPs-BQAusngpEqy_l12r85TVABVQbA_BvOUs8kUBNo="/>
                    </div>

                    <div className="right">
                        <div className="title">{this.state.title}</div>
                        <div className="plot">Supernatural powers shown in the movie.</div>
                        <div className="price">Rs.199</div>

                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="star-dis">

                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png"/>
                              <img alt="img" src="https://cdn-icons-png.flaticon.com/128/149/149763.png" className="stars"/>
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/2952/2952084.png" onClick={this.addStars.bind(this)}/>
                                <span className="satrtCount">0.5</span>
                            </div>
                            <button className="favorite-btn">Favorite</button>
                            <button className="cart-btn">Add to cart</button>
                        </div>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default MovieCard;