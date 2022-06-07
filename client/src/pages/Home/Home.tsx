import React from 'react';
import Person from '../../components/person/Person';
import '../Home/home.css'

const Home = () => {
    return (
        <div className='container'>
            <h1>This is the home page</h1>
            <p>below is a person component</p>
            <Person name='Billy' age={23} likes='idk' />
        </div>
    );
}

export default Home;
