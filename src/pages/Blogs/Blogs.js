import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className='bg-light vh-100 p-4 my-4'>
            <article>
                <h3>1. Difference between javascript and nodejs</h3>
                <p><b>Javascript:</b> is a programming language and it is used for writing scripts on the Webpage.</p>
                <p><b>Nodejs:</b> is javascript runtime environment that allow us to work on the server side.</p>
            </article>
            <article>
                <h3>2. When should you use nodejs and when should you use mongodb</h3>
                <p><b>Nodejs:</b> When we need to work one server side thins in our application that time we can use Nodejs</p>
                <p><b>Mongodb:</b> is a NoSql Database management system whenever we need database things that time we could use Mongodb.</p>
            </article>
            <article>
                <h3>3. Differences between sql and nosql databases.</h3>
                <p><b>Sql:</b> is Structured query language means it keeps its data by maintaing a structure</p>
                <p><b>NoSql:</b> is non structured query language it doesn't keeps it's data by maintaing any structure. It keeps data like a javascript object.</p>
            </article>
        </Container>
    );
};

export default Blogs;