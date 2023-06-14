const Display = ({links}) =>{
console.log(links)
    return(
        <div>
            display shortened url
            {
               links.map((link) =>{
                    console.log(link);
                    return(
                        <div key={link.id}>
                            <p>{link.link}</p>
                        </div>
                    )
               })
            }
        </div>
    )
}

export default Display;