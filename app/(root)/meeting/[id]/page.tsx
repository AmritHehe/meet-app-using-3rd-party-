import React from "react";

export function Meeting ({params} :  {params : { id : string}}){
    return <>
        <div>
            Meeting Room : #{[params.id]}
        </div>
    </>
}
export default Meeting
