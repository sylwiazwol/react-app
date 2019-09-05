import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Lorem ipsum 1",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque amet, vitae consequatur exercitationem ratione voluptatibus repudiandae alias deleniti culpa illo suscipit quia sint temporibus illum commodi itaque ea ab ipsum?"
    },
    {
        id: 2,
        title: "Lorem ipsum 2 ?",
        author: "Ania Kwiatkowska",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."
    },
    {
        id: 3,
        title: "Lorem ipsum 3",
        author: "Jan Kowalski",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."
    }
]

const HomePage = () => {
    
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/> //{...article} do przekazania propsów
    ))
    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;