import { Component } from "react";



class MovieCard extends Component{
    render(){
        return(
            <div className="main">
                <div class="movie-card">
                    <div className="left">
                        <img alt="poster" src="https://media.istockphoto.com/id/1271634341/photo/teamwork-of-business-concept-group-of-businessperson-human-resources.webp?b=1&s=170667a&w=0&k=20&c=4UPs-BQAusngpEqy_l12r85TVABVQbA_BvOUs8kUBNo="/>
                    </div>

                    <div className="right">
                        <div className="title">The Avengers</div>
                        <div className="plot">Supernatural powers shown in the movie.</div>
                        <div className="price">Rs.199</div>

                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="stars">star</div>
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