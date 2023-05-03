const recipesLoader = async({params}) =>{
    const res = await fetch(`${import.meta.env.VITE_SERVER_API}/chefs/${params.chefId}`);
    const data = await res.json();
    console.log(data);
    return data;
}

export default recipesLoader;