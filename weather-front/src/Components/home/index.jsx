import React from 'react';

//import Carousel from 'react-material-ui-carousel';
import Carousel from '../carousel'
import API from '../../utils/API';


export default function Home(){
    const [items, setItems] = React.useState([]);
    const myAPI = new API();
    const componentDidMount = function(){
        myAPI.getWeatherFavoriteCities()
                 .then(response =>{
                    let listItems = [];
                    let oneItem = [];
                    const limit = 3;
                    let compteur = 0;
                    response.forEach((ville, index) => {
                        compteur ++;
                        if( compteur !== limit){
                            oneItem.push(ville);
                        }else{
                            oneItem.push(ville);
                            listItems.push(oneItem);
                            compteur = 0;
                            oneItem = [];
                        }
                    })
                    if(oneItem.length > 0)
                    listItems.push(oneItem);
                    setItems(listItems);
                 })
                 .catch(err => {
                    alert(err);
                })
        

    }
    React.useEffect(componentDidMount, []);
    return (
        items.length > 0 && 
               (<Carousel items={items} home="true"/>)
           
        );

}