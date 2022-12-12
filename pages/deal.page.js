//import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FullContainer } from '../components/containers';
import { List } from '../components/containers'
import { DealCard } from '../components/dealCard';


export const Deals = () =>{
const deals = useSelector((state) => state.todoStore);

return(
    
    <FullContainer>
    <List>
        {deals.map((deal) => {           //vitashim nashi dela iz state i sdelaem ih perebor s pomoshiu hook useSelector
        return <DealCard 
        key={deal.id} 
        deal={deal} 
        
        />;
        })}
        </List>
    </FullContainer>
   
 );  
};