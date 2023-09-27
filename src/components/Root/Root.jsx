import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div id='stbg'>
           
            <Header></Header>

            <div>
            <Outlet></Outlet>
            </div>
          
        </div>
    );
};

export default Root;
