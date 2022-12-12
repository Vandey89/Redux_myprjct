import { useNavigate } from "react-router-dom"
import { CardContainer } from "../components/containers"

import { onEdit, onRemove } from "../store/actions";
import {  useDispatch } from 'react-redux';

export const DealCard =({deal, onEdit, onRemove}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    return(
        <CardContainer>
            
            <input 
            type="checkbox"
            defaultChecked={deal.status}
            onChange={(e) => dispatch(onEdit({...deal,status: e.target.checked}))}        //na4ali ispolzovat' dispatch N42
            />
            <span>{deal.text}</span>
            <button onClick={() => dispatch(onRemove(deal.id))}> Remove </button>                         
            <button onClick={() => navigate(`/form/${deal.id}`) }>go to edit</button>
        </CardContainer>
    )
}