import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../../Shared/NewsSummaryCard/NewsSummary';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This is category has news: {categoryNews.length}</h2>
            {
                categoryNews.map(news =><NewsSummary
                key={news._id}
                news={news}
                
                >

                </NewsSummary>)
            }
        </div>
    );
};

export default Category;