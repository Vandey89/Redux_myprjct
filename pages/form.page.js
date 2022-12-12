import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';               //importiruem parametri iz "react-router-dom"
import { FullContainer } from '../components/containers';   //importiruem iz containers i teper' ojno ispolzovat' ego v ka4estve obvertki
import { Form, TextArea } from '../components/forms' ;         //import 'TextArea' i 'Form'

import { onAdd, onEdit } from '../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { onAdd } from '../store/actions';

export const FormDeal = ({onAddDeal, deals, onEdit}) =>{                      //delaem export komponenta (on budet funkcional'nm komponentom)
const  {id = ''} = useParams() ;                    //budem s4itivat' app.jsx(12:20)
const navigate = useNavigate();
const [text, setText] = useState();
const deals = useSelector((state) => state.todoStore);  //dostaem nashi dela N42
const dispatch = useDispatch();                         //teper' mi mozhem ispolzovat' nashi funkcii onAdd,onEdit,onRemove

useEffect(() => {
    try{
        if(id){
            const {text} = deals.find((deal) => deal.id === id);
            setText(text);
        }
    }catch(_)  {} //ina4e catch( delali zaglushku)

}, []
);



    const onSave = (e) =>{                           //sozdali sobitie dlya  save
        e.preventDefault();
        dispatch(onAdd(text))
        console.log(text);
       //N40 onAddDeal(text);
       navigate("/");
        
    };
    const onUpdate = (e) =>{
        //N40 e.preventDefault(); //nada uto4nit'
        dispatch(onEdit({id, text}))
        //N42 onAddDeal(text);
        navigate('/')
    }

    const onInput = (e) =>{
        e.preventDefault();
        setText(e.target.value);
        
    };
    
return(
  
    <FullContainer>
        
        
        <Form onSubmit={id ? onUpdate : onSave}>
            <TextArea value={text} onInput={onInput}/>
            <br />
            <button>Save</button>
        </Form>
    
    </FullContainer>
    
    
    
)
} ;