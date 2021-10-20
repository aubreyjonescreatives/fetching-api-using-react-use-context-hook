import React, { createContext, useState, useEffect, useContext } from 'react'; 
import axios from 'axios'


const MealContext = createContext({

meals: [],
mealList: [],


})



export const MealContextProvider = (props) => {
    const [meals, setMeals] = useState([])
    const [mealList, setmealList] = useState([])




    const fetchCategories = async () => {
   
        try {
        const response = await axios.get('/cat')
        console.log(response.data.categories)
        setmealList(response.data.categories)
       
        } catch (err) {
            console.log(err)
        }
    }
    
        useEffect(() => {
            fetchCategories()
        
    }, [])

 // call the function
    return (
        <MealContext.Provider value={{
        meals, 
        mealList,
        }}>
            {props.children}
        </MealContext.Provider>
    )
   



}

export const useMealContext = () => useContext(MealContext)