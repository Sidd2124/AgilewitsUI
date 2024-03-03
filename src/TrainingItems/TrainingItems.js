import "./TrainingItems.css"

import MainLogo from "../CommonHeader/CompanyLargecone.png"

const TrainingItems = (props) => {
    const { TringItemsInfo } = props;
    const { DomainName,ItemDescription,TrainingLogo,Titlee,ChildLogonOne,ChildLogonTwo,ChildLogonThree } = TringItemsInfo;



    return (
        <div className="TrainingItemTop">

<div className="MailLogoBorder">
    <img src={MainLogo} alt="MainLogo"/>
    <img className="Childlogo" src={ChildLogonOne} alt="One"/>
    <img className="Childlogo"  src={ChildLogonTwo} alt="One"/>
    <img className="Childlogo"  src={ChildLogonThree} alt="One"/>
</div>
        <div className="vertical-text">
            <h1>{DomainName}</h1>
        </div>
        <div className="TrainingDesccription">
            <img src={TrainingLogo} alt="TrainingLogo" className="TrainigLogo"/>
        <h2 className='IbmBlue'>{Titlee}</h2>
<p className="ItemDesription">{ItemDescription}</p>
        </div>
        </div>
    );
};

export default TrainingItems;
