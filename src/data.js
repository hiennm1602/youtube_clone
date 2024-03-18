export const API_KEY = 'AIzaSyBQkFCJT5furpT6lKs8ZMC8GdaoACa0Pbg';
//change view hang tram , hang trieu
export const value_converter = (value) =>{
    if(value>= 1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if(value >= 1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }

}