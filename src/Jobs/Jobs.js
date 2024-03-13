import JobItem from '../JobItems/Jobitem'

import AgilewitsIntro from '../AgilewitsIntro/AgilewitsIntro'

import CommanHeadre from '../CommonHeader/CommonHeadre'

import BotttomPage from '../BottomPage/BottomPage'
import {Link} from 'react-router-dom'
import "./Jobs.css"

import { useState } from 'react'

import NoJobs from './No-Jobs.png'

const JobInfo=[
 
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png', Type: 'Internship', id: 'bb95e51b-b1b2-4d97-bee4-1d5ec2b96751', Description: 'We are looking for a DevOps Engineer with a minimu…tages. The role will focus on production support.', Location: 'Delhi',Country: 'India',Package: "10 LPA",Rating: 4,Title: "Devops Engineer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png', Type: 'Full Time', id: 'd6019453-f864-4a2f-8230-6a9642a59466', Description: 'We’re in search of a Back-End Software Engineer th…t be architecting new features for our customers.', Location: 'Bangalore',Country: 'India' ,Package: "11 LPA",Rating: 4,Title: "Backend Engineer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png', Type: 'Internship', id: '1e47d355-4000-4c27-a17a-ae55dd6df27d', Description: 'Google is and always will be an engineering compan…orld one technological achievement after another.', Location: 'Hyderabad',Country: 'India',Package: "12 LPA",Rating: 4,Title: "FullStack Engineer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png', Type: 'Internship', id: '10c539a8-97f3-4277-90c1-b83a32c11ba1', Description: 'Facebooks’s Data Science team leverages big data t…o develop and enhance Facebook user experiences. ', Location: 'Chennai',Country: 'India',Package: "8 LPA",Rating: 4,Title: "Reactjs Developer "},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png', Type: 'Internship', id: 'ad104b3b-e2a4-42f0-b78b-2b4b4699cffb', Description: 'As a Data Scientist, you will evaluate and improve…cts, and understanding the behavior of end-users.', Location: 'Hyderabad',Country: 'India',Package: "7 LPA",Rating: 4,Title: "Data Analyst"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png', Type: 'Internship', id: '7a17c601-9ecf-4a4f-b289-afa808ab1710', Description: 'As a DevOps Engineer, you will play a key role in …ty and safety of the production systems at scale.', Location: 'Mumbai',Country: 'India',Package: "14 LPA",Rating: 4,Title: "Backend Engineer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/swiggy-img.png', Type: 'Full Time', id: '54462d29-6d8c-4b27-9a59-e0fbdbd4de0f', Description: "As DevOps Developer, you are responsible for imple…o the table, there's no limit to what you can do.", Location: 'Mumbai',Country: 'India',Package: "11 LPA",Rating: 4,Title: "Backend Engineer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png', Type: 'Internship', id: '5ecd5a9b-4805-4924-8f26-551302326b27', Description: 'We’re looking for a scientist who can define the n… outside the box and design innovative solutions.', Location: 'Bangalore',Country: 'India',Package: "6 LPA",Rating: 4,Title: "Devops Engineer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png', Type: 'Freelance', id: '2b40029d-e5a5-48cc-84a6-b6e12d25625d', Description: 'The Experimentation Platform team builds internal …th our users, fast feedback, and quick iteration.', Location: 'Delhi',Country: 'India',Package: "3 LPA",Rating: 4,Title: "Devops Engineer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png', Type: 'Freelance', id: '62b19914-67fc-49aa-b10e-35b2e69fbedd', Description: 'Are you interested in building products used by mo…r, we can help people build stronger communities.', Location: 'Mumbai',Country: 'India',Package: "6 LPA",Rating: 4,Title: "Devops Engineer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png', Type: 'Part Time', id: '5a75b254-a812-4c2d-ae26-ec9e04234bf7', Description: 'The Security Operations team is seeking a new team…tners that use Citrix and third-party platforms. ', Location: 'Bangalore',Country: 'India',Package: "10 LPA",Rating: 4,Title: "Devops Engineer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png', Type: 'Internship', id: '19090757-3dee-4b2c-a1f0-f17f13993328', Description: 'As a DevOps Engineer, you will play a key role in …ty and safety of the production systems at scale.', Location: 'Chennai',Country: 'India',Package: "15 LPA",Rating: 4,Title: "Devops Engineer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png', Type: 'Full Time', id: '00903187-11e2-4e2e-bbda-7154debce688', Description: 'We are building a NEW carrier facing product to re…s just started and the possibilities are immense.', Location: 'Chennai',Country: 'India',Package: "4 LPA",Rating: 4,Title: "Fullstack Developer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png', Type: 'Full Time', id: '0f080434-4287-4f49-9107-88227e0ddd75', Description: 'As an ML Engineer, you will be evaluating existing…and applying appropriate ML algorithms and tools.', Location: 'Chennai',Country: 'India',Package: "5 LPA",Rating: 4,Title: "Fullstack Developer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png', Type: 'Internship', id: '811c3f5e-4688-4781-90be-87c4b98b39a4', Description: 'As an ML Engineer, you will get a chance to choose…nd the infrastructure on which all of these run. ', Location: 'Chennai',Country: 'India',Package: "7 LPA",Rating: 4,Title: "Fullstack Developer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png', Type: 'Freelance', id: 'f7577c47-643d-41d0-8e59-e6129bb9ff21', Description: 'We are looking for engineers who have hands-on exp…ctive Modeling techniques will be added strength.', Location: 'Mumbai',Country: 'India',Package: "8 LPA",Rating: 4,Title: "Fullstack Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/swiggy-img.png', Type: 'Full Time', id: '8d86313e-3240-4521-b078-8600edcaf05c', Description: "Swiggy's StoreFront Engineering team helps custome…xpertise in database design & performance tuning.", Location: 'Chennai',Country: 'India',Package: "4 LPA",Rating: 4,Title: "Fullstack Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png', Type: 'Part Time', id: '8e035e74-eed0-4df5-a075-be9e5e752a3f', Description: 'Are you interested in building products used by mo…r, we can help people build stronger communities.', Location: 'Delhi',Country: 'India',Package: "6 LPA",Rating: 4,Title: "Fullstack Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png', Type: 'Part Time', id: '833ecdf5-769c-4756-98fa-c7ee08e5aef1', Description: 'As a Frontend Engineer, you will be directly respo… You’ll support multiple different product areas.', Location: 'Chennai',Country: 'India',Package: "9 LPA",Rating: 4,Title: "Fullstack Developer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png', Type: 'Internship', id: '50c993aa-16ca-4947-8c11-5b9446b10591', Description: 'Google is and always will be an engineering compan…orld one technological achievement after another.', Location: 'Bangalore',Country: 'India',Package: "8 LPA",Rating: 4,Title: "Data Scientist"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png', Type: 'Full Time', id: 'ad567c55-5f75-4764-af7c-eec0ff23eb7a', Description: 'Drive research and development in the areas of Cus…based solutions for high-impact complex problems.', Location: 'Chennai',Country: 'India',Package: "3 LPA",Rating: 4,Title: "Data Scientist"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png', Type: 'Freelance', id: '6fc5663c-8302-481d-8887-75e519cfec16', Description: 'Drive research and development in the areas of Cus…based solutions for high-impact complex problems.', Location: 'Mumbai',Country: 'India',Package: "8 LPA",Rating: 4,Title: "Data Scientist"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png', Type: 'Freelance', id: 'def72c65-360f-493b-a2da-8734fa26c33d', Description: 'As a Data Scientist, you will evaluate and improve…cts, and understanding the behavior of end-users.', Location: 'Chennai',Country: 'India',Package: "9 LPA",Rating: 4,Title: "Data Scientist"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/swiggy-img.png', Type: 'Part Time', id: 'c5490daf-9274-4b1e-bce6-0dbda7b20c24', Description: 'The Marketplace Fulfilment Team is responsible for… affect the entire journey of a customer’s order.', Location: 'Delhi',Country: 'India',Package: "4 LPA",Rating: 4,Title: "Data Scientist"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png', Type: 'Internship', id: '6410d250-2604-49d4-b5d3-917608aa1c89', Description: 'As a DevOps Engineer, you will play a key role in …ty and safety of the production systems at scale.', Location: 'Chennai',Country: 'India',Package: "9 LPA",Rating: 4,Title: "UI Developer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png', Type: 'Internship', id: 'ca054446-09b0-4b8d-85ef-fd8565554ef0', Description: 'We are looking for engineers who have hands-on exp…ctive Modeling techniques will be added strength.', Location: 'Chennai',Country: 'India',Package: "7 LPA",Rating: 4,Title: "UI Developer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png', Type: 'Internship', id: 'a35adfc3-59c0-4608-b3b4-1834812387b8', Description: 'You will be part of a new team building a large-sc…be utilized by thousands of customers every day. ', Location: 'Hyderabad',Country: 'India',Package: "6 LPA",Rating: 4,Title: "UI Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png', Type: 'Part Time', id: '5d57689e-cb8f-47f5-8e18-9ce3bb6a894d', Description: 'The Security Operations team is seeking a new team…rtners that use Citrix and third-party platforms.', Location: 'Hyderabad',Country: 'India',Package: "9 LPA",Rating: 4,Title: "UI Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png', Type: 'Internship', id: '0ac78d8a-e323-48ed-ab2a-c77f3737c3dc', Description: 'You will be part of a new team building a large-sc… be utilized by thousands of customers every day.', Location: 'Hyderabad',Country: 'India',Package: "4 LPA",Rating: 4,Title: "Reactjs Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png', Type: 'Internship', id: '1ad9b836-bfe6-4fe9-8ec5-7b3caeea9922', Description: 'We are looking for a Data Scientist who will guide…, and models that will guide strategic decisions.', Location: 'Bangalore',Country: 'India',Package: "6 LPA",Rating: 4,Title: "Reactjs Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png', Type: 'Internship', id: '0bd0157c-a755-49ec-b2ea-575fee26ce3a', Description: 'Amazon IN FBA, part of the Seller Fulfilment Techn… scale programs to support business requirements.', Location: 'Boston, Massachusetts', Country: 'USA',Package: "9 LPA",Rating: 4,Title: "Reactjs Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png', Type: 'Freelance', id: 'a838aa29-3420-434c-ab37-f7fceaf89221', Description: 'Drive research and development in the areas of Cus…based solutions for high-impact complex problems.', Location: 'Boston, Massachusetts', Country: 'USA',Package: "5 LPA",Rating: 4,Title: "UI Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/swiggy-img.png', Type: 'Internship', id: 'bfc0d56f-15be-466e-b602-6fa28b4c158f', Description: "The Developer platform team enables Swiggy's engin…roduct teams to build and operate their services.", Location: 'Austin, Texas', Country: 'USA',Package: "9 LPA",Rating: 4,Title: "Backend Engineer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png', Type: 'Internship', id: '9dad7a98-8857-4f3e-9bce-e338b6e06258', Description: 'Amazon IN FBA, part of the Seller Fulfilment Techn… scale programs to support business requirements.', Location: 'Austin, Texas', Country: 'USA',Package: "8 LPA",Rating: 4,Title: "FullStack Engineer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png', Type: 'Part Time', id: '32f85617-1f00-47c9-80a7-b20c04aadcf6', Description: 'As a Machine Learning engineer at Zomato, you will…eriment and iterate rapidly, and get things done.', Location: 'Seattle, Washington', Country: 'USA',Package: "4 LPA",Rating: 4,Title: "Data Analyst"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png', Type: 'Part Time', id: '3cc666e5-23a5-4981-ade2-61115f95ac0b', Description: 'The Experimentation Platform team builds internal …th our users, fast feedback, and quick iteration.', Location: 'Seattle, Washington', Country: 'USA',Package: "6 LPA",Rating: 4,Title: "ML Engineer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png', Type: 'Full Time', id: 'cbaa92a4-6d38-4e02-901d-12b62e9ca161', Description: 'At Google, engineers not only revolutionize search…orld one technological achievement after another.', Location: 'Seattle, Washington', Country: 'USA',Package: "8 LPA",Rating: 4,Title: "ML Engineer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png', Type: 'Part Time', id: 'fd985d0b-0f0b-40a5-81c9-5c8989180a1e', Description: 'As a Machine Learning engineer at Zomato, you will…eriment and iterate rapidly, and get things done.', Location: 'Boston, Massachusetts', Country: 'USA',Package: "6 LPA",Rating: 4,Title: "ML Engineer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png', Type: 'Part Time', id: '63e8b54a-2025-4272-b45e-54a39170dd03', Description: 'We are looking for a Data Scientist who will guide…, and models that will guide strategic decisions.', Location: 'Austin, Texas', Country: 'USA',Package: "7 LPA",Rating: 4,Title: "Frontend Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png', Type: 'Freelance', id: '96e1ddb6-930c-4ca4-a80e-998ce410c6cf', Description: 'The Experimentation Platform team builds internal …th our users, fast feedback, and quick iteration.', Location: 'Seattle, Washington', Country: 'USA',Package: "8 LPA",Rating: 4,Title: "Frontend Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png', Type: 'Internship', id: '9f877dc5-ba63-4230-81a3-895fcc7fb36f', Description: 'The Experimentation Platform team builds internal …th our users, fast feedback, and quick iteration.', Location: 'San Francisco, California', Country: 'USA',Package: "4 LPA",Rating: 4,Title: "Frontend Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png', Type: 'Internship', id: 'd59175ab-21d9-4532-9ddb-15b3fb19d85a', Description: 'You will be part of a new team building a large-sc… be utilized by thousands of customers every day.', Location: 'Boston, Massachusetts', Country: 'USA',Package: "5 LPA",Rating: 4,Title: "Frontend Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png', Type: 'Internship', id: '729c08c1-109d-4622-946b-a84762c0aad8', Description: 'We are looking for a passionate, hands-on engineer…eb applications which are efficient and reusable.', Location: 'Boston, Massachusetts', Country: 'USA',Package: "3 LPA",Rating: 4,Title: "Frontend Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png', Type: 'Full Time', id: '96845adc-45dd-4235-bdaf-2b8345392ea6', Description: 'Data Scientists at Netflix are consultants who par…d deliver best-in-class research to address them.', Location: 'San Francisco, California', Country: 'USA',Package: "9 LPA",Rating: 4,Title: "UX Developer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png', Type: 'Internship', id: '7d8a81df-fcaa-4cca-916d-75968b599e42', Description: 'Data Scientists at Netflix are consultants who par…d deliver best-in-class research to address them.', Location: 'Boston, Massachusetts', Country: 'USA',Package: "6 LPA",Rating: 4,Title: "UX Developer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png', Type: 'Internship', id: 'e5c175d7-9710-4971-b207-24b9967fc374', Description: 'As a Machine Learning engineer at Zomato, you will…eriment and iterate rapidly, and get things done.', Location: 'Boston, Massachusetts', Country: 'USA',Package: "7 LPA",Rating: 4,Title: "UX Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png', Type: 'Full Time', id: 'ededc9c4-f0b6-4044-b1a2-7a1c6f830064', Description: 'As an ML Engineer, you have to develop highly scal….g. distributed clusters, multicore SMP, and GPU)', Location: 'Boston, Massachusetts', Country: 'USA',Package: "8 LPA",Rating: 4,Title: "UX Developer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/swiggy-img.png', Type: 'Full Time', id: '01ff7185-fef9-4e87-8f15-9d6b6a9b4dcd', Description: 'As an ML Engineer, you serve as the bridge between…to the development of data products and services.', Location: 'Boston, Massachusetts', Country: 'USA',Package: "4 LPA",Rating: 4,Title: "UX Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png', Type: 'Freelance', id: 'dd9b8fba-39ae-4000-ad3f-b276e5c6818c', Description: 'Amazon.com Retail Systems team is looking for pass…rn competitive data to aid in shopping decisions.', Location: 'Austin, Texas', Country: 'USA',Package: "6 LPA",Rating: 4,Title: "Fullstack Developer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png', Type: 'Internship', id: 'df04eede-e579-4c8a-a21f-6131933037f2', Description: 'As a Frontend Engineer, you will be directly respo… You’ll support multiple different product areas.', Location: 'Austin, Texas', Country: 'USA',Package: "8 LPA",Rating: 4,Title: "Fullstack Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png', Type: 'Part Time', id: '96a6fa3f-1351-4a84-9bb3-b07ed53628d3', Description: 'Amazon.com Retail Systems team is looking for pass…rn competitive data to aid in shopping decisions.', Location: 'Austin, Texas', Country: 'USA',Package: "9 LPA",Rating: 4,Title: "Fullstack Developer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png', Type: 'Internship', id: 'dd8faa3b-1793-4409-bb93-78e7ae320a00', Description: 'As an ML Engineer, you will be evaluating existing…and applying appropriate ML algorithms and tools.', Location: 'Austin, Texas', Country: 'USA',Package: "4 LPA",Rating: 4,Title: "Reactjs Developer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png', Type: 'Full Time', id: 'bb8c5910-279d-4c0a-aa80-7de1fc955bf6', Description: 'Amazon.com Retail Systems team is looking for pass…rn competitive data to aid in shopping decisions.', Location: 'Seattle, Washington', Country: 'USA',Package: "5 LPA",Rating: 4,Title: "Serach Analyst"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png', Type: 'Internship', id: '4a10e138-de09-4dbd-b5f8-fc3063e4fbaa', Description: 'As a Frontend Engineer, you will be directly respo… You’ll support multiple different product areas.', Location: 'Seattle, Washington', Country: 'USA',Package: "8 LPA",Rating: 4,Title: "Data Analyst"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png', Type: 'Internship', id: '30004a4f-0cc3-4ec9-9283-047fc4e60f24', Description: 'We are looking for full-stack engineers who can he…ance with coding standards and technical design. ', Location: 'Seattle, Washington', Country: 'USA',Package: "6 LPA",Rating: 4,Title: "Backend Engineer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png', Type: 'Part Time', id: '6bd26015-6df2-44c4-9e91-444bfbacdfd2', Description: 'As an ML Engineer, you will help define and execut…eas of investment like AutoML and ML Performance.', Location: 'Seattle, Washington', Country: 'USA',Package: "9 LPA",Rating: 4,Title: "UI Developer"},
     
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png', Type: 'Part Time', id: 'df664d45-8b40-4504-897c-ed3fdb6b5b02', Description: 'At Google, engineers not only revolutionize search…orld one technological achievement after another.', Location: 'San Francisco, California', Country: 'USA',Package: "8 LPA",Rating: 4,Title: "FrontEnd Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png', Type: 'Full Time', id: 'bcaf3272-6ee7-46b8-9d1a-828d1a6ed085', Description: 'We are looking for engineers who have hands-on exp…ctive Modeling techniques will be added strength.', Location: 'San Francisco, California', Country: 'USA',Package: "3 LPA",Rating: 4,Title: "UX Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png', Type: 'Freelance', id: '9060e3b1-05d2-4940-9bf8-54c0423eb490', Description: 'As an engineer in the Personalisation team, you wi… serve recommendations to our users in real-time.', Location: 'San Francisco, California', Country: 'USA',Package: "5 LPA",Rating: 4,Title: "Reactjs Developer"},
    
    {CompanyLogo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png', Type: 'Part Time', id: '775924df-fb9a-4d0b-beef-7f8c17e78ee8', Description: 'We are looking for full-stack engineers who can he…ance with coding standards and technical design. ', Location: 'San Francisco, California', Country: 'USA',Package: "8 LPA",Rating: 4,Title: "Devops Engineer"},
    
    ]

    

const Jobs =()=>{
    const[JObCountry,SetJobCountry]=useState("India")
    const[JObCity,SetCity]=useState("Boston, Massachusetts")
    const[SeachInputValue,SetSeachInputValue]=useState("")
    const [ButtonSearch,SetButtonSearch]=useState("")

    const UpdateCountry=(e)=>{
        SetJobCountry(e.target.value)
    }
    const UpdateCity=(e)=>{
        SetCity(e.target.value)
    }

    const UpdateSearchResult=()=>{
        SetButtonSearch(SeachInputValue)
        SetSeachInputValue("")
    }

    const UpdateInputValue=(e)=>{
        SetSeachInputValue(e.target.value)
    }
   
    const FilterdJobs=JobInfo.filter((each)=>each.Country.includes(JObCountry)&&each.Title.includes(ButtonSearch))
    return(
        <div className='JobsFirstLayer'>
            <AgilewitsIntro/>
             <div  className='JobsSecondLayer'>
                <CommanHeadre PageName="Careers"/>
                <div className='OpeningsHeading'>
                    <div>
             <h1 className='CurreniOpenings'>{FilterdJobs.length} Jobs Found for you...</h1>

             <input type='Search' placeholder='Job Title or Key word' value={SeachInputValue} onChange={UpdateInputValue}/>
             <svg onClick={UpdateSearchResult} xmlns="http://www.w3.org/2000/svg" className='SerachIcon' viewBox="0 0 24 24" width="39" height="34" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
             </div>
           
            <div>
                <h3 >Choose By Country</h3>
             <section>
                <select onChange={UpdateCountry}>
                <option selected value="India">INDIA</option>
                <option value="USA">USA</option>
                </select>
             </section>
             <section className='City'>
                <select onChange={UpdateCity}>
                <option value="San Francisco, California">San Francisco, California</option>
                <option value="Seattle, Washington">Seattle, Washington</option>
                <option value="Austin, Texas">Austin, Texas</option>
                <option value="Boston, Massachusetts">Boston, Massachusetts</option>
                </select>
             </section>
             </div>
             </div>
        <div >
            {FilterdJobs.length===0?
            <div className='NOJobs'>
           
            <img src={NoJobs} alt="No Jobs Found" />
          
            <button onClick={UpdateSearchResult}>Back to Jobs</button>
            
            </div>
            
            :<div className='JobsTop'>  {FilterdJobs.map((each)=><JobItem JobItemsInfo={each}/>)}</div>}
           
          
        </div>
        <BotttomPage/>
             </div>
        </div>
    )
}

export default Jobs





