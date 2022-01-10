import React from 'react';
import Grid from '@material-ui/core/Grid';

//import Carousel from 'react-material-ui-carousel';
import Carousel from '../carousel'
import ItemVille from '../item';
import API from '../../utils/API';
import {useParams} from 'react-router-dom';


export default function Detail(props){
    let { id } = useParams();
    const [items, setItems] = React.useState([]);
    const myAPI = new API();
    const componentDidMount = function(){
        myAPI.getWeatherWeekCity(id)
                 .then(response =>{
                    let listItems = [];
                    let oneItem = [];
                    const limit = 3;
                    let compteur = 0;
                    response.weeks.forEach((ville, index) => {
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
               (<Carousel items={items} />)
           
        );

}