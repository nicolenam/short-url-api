import axios from "axios";
import Display from './Display';
import { useState } from "react";

const Form = () =>{

    const [links, setLinks] = useState([]);
    const [textInput, setTextInput] = useState("");


    const getData = () =>{

        axios({
            url: "https://api.shrtco.de/v2/shorten?",
            params: {
                url: textInput
            }
        }).
        then((res)=>{
            console.log(res.data.result.code);

            const linksObject = {
                id: res.data.result.code,
                link: res.data.result.short_link
            }
            setLinks((prev)=>[...prev, linksObject]);
        }).
        catch(error =>{
            console.log(error);
        })
    }


    const handleChange = (e) =>{

        setTextInput(e.target.value)
    }

    const handleSubmit = (e) =>{

        e.preventDefault();
        e.target.reset();
        getData();
    }

    return(
        <>
            <form className="form" onSubmit={handleSubmit}>
                <label className="sr-only">Url</label>
                <input type="text" onChange={handleChange} placeholder="Shorten a link here..."></input>
                <button>Shorten It!</button>
            </form>
            <Display links={links}/>
        </>
    )
}

export default Form;