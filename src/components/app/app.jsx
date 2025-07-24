import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

function App() {

    const data = [
        {name: "John C.", salary: 800, increase: true, id: 1, like: true},
        {name: "Alex C.", salary: 1500, increase: true, id: 2, like: true},
        {name: "Carl W.", salary: 2100, increase: true, id: 3, like: true}
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            
            <EmployeeList data={data} />
            <EmployeeAddForm />
        </div>
    );
}

export default App;