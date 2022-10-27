import React from 'react';

const DetailCourse = ({detail}) => {
    const {title,topic,topic1,topic2,topic3 } = detail
    return (
        //course details
        <div>
            <h2 className='font-bold'>{title}</h2>
            <li>{topic}</li>
            <li>{topic1}</li>
            <li>{topic2}</li>
            <li>{topic3}</li>
             
        </div>
    );
};

export default DetailCourse;