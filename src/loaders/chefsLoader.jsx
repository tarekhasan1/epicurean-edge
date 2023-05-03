const chefsLoader = async() =>{
    const res = await fetch(`${import.meta.env.VITE_SERVER_API}/chefs`);
    const data = await res.json();
    console.log(data);
    return data;
}

export default chefsLoader;