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


3. Write a Netlify function that will retrieve your API data and provide it to your React component(s).


4. Your Context component has at least one side effect that is handled using the useEffect hook