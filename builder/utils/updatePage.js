const URL_BASE="http://localhost:1337/pages"
export const updatePage = async (data) =>{
    console.log(data);
    if(data){
    const response  = await fetch(URL_BASE+'/609a2721a0fa655dac819468',{
        method: "PUT",
        body:data})
    return await response.json();}
    else{ return;}
}