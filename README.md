## React front end app to demonstrate React createContext and useContext hooks to retrieve API data



1. Create a React Context and provide a Context Provider functional component.

*** I store my fetch API data in a React context hook in my MealContextProvider file. I then wrap it around my app.js routes.

```
const App = () => {
  return (
   <>
   <Router>
    <MealContextProvider>
     <NavBar />
  <Route path="/" exact component={MealCategories} />
  <Route path="/MealFavorites" exact component={MealFavorites} />
   <Footer />
   </MealContextProvider>
   </Router>
   </>
  );
}

export default App;




```


2. Provide a means for components to use the Context you created.


***In my MealCategories.js component, I access the useContext hook and store it in a const. I then map through the mealData constant in my return statement. 


```

const mealData = useMealContext()


 
{mealData.mealList.map((category) => {
    return (

      // more code here in file
    )

}


```




3. Write a Netlify function that will retrieve your API data and provide it to your React component(s).


***I created a Netlify function that retrieves my API data to avoid adding a server to a React front-end project. This is sample code that connects my React component to that Netlify function: 

```

    const fetchCategories = async () => {
        const mealsURL = `/.netlify/functions/mealData`
        try {
        const response = await axios.get(mealsURL)
        const mealCats = await response.data.categories
       // console.log(response.data.categories)
       setmealList(mealCats)
       
        } catch (err) {
            console.log(err)
        }
    }
    
        useEffect(() => {
            fetchCategories()
        
    }, [])






```





4. Your Context component has at least one side effect that is handled using the useEffect hook