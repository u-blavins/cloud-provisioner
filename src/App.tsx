import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from 'components/common/NavigationBar';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavigationBar />
            </BrowserRouter>
        </div>
    );
};

export default App;
