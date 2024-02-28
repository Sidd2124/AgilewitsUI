import "./CommanHeadre.css"

import CompanyLargecone from "../Home/CompanyLargecone.png"

const CommanHeadre=(props)=>{
    const{PageName}=props
return(
    <div className="HeaderTopLayer">
        <h1 className="PageName">
            {PageName}
        </h1>

        <img className="PrimeIcone"  src={CompanyLargecone} alt="PrimeIcone"/>
    </div>
)
}

export default CommanHeadre