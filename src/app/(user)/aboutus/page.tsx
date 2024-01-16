import {FC} from 'react';
import axios from 'axios';

interface dashboardProps {}

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const page = async () => {
    await wait(5000);
    

    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

        return  <div>{JSON.stringify(data)}</div>
}

export default page