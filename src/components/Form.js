import axios from "axios";
import Display from './components/Display';
import { useEffect, useState } from "react";

const Form = () =>{

    const [links, setLinks] = useState([]);

    useEffect(()=>{

        axios({
            url: "https://api.shrtco.de/v2/shorten?",
            params: {
                url: "https://www.google.com/search?q=entry+front+end+developer+jobs&rlz=1C5CHFA_enCA932CA932&oq=entry+front+end+developer&aqs=chrome.1.69i57j0i512l3j0i22i30l2j69i60l2.2183j0j4&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwjBqa-q8sL_AhUjlYkEHf_eBTUQkd0GegQIJRAB#fpstate=tldetail&htivrt=jobs&htiq=entry+front+end+developer+jobs&htidocid=RZrVC2A64B4AAAAAAAAAAA%3D%3D&sxsrf=APwXEdfg8AaZyWn1JG-GLHm5kwo3pXdUXg:1686750246989"
            }
        }).
        then((res)=>{
            console.log(res.data.result.short_link);
        }).
        catch(error =>{
            console.log(error)
        })

    },[]);

    return(
        <>
            <form className="form">
                <label className="sr-only">Url</label>
                <input type="text"></input>
                <button>Shorten It!</button>
            </form>
            <Display />
        </>
    )
}

export default Form;