import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "John C.", salary: 800, increase: true, id: 1, rise: true },
                { name: "Alex C.", salary: 1500, increase: true, id: 2, rise: false },
                { name: "Carl W.", salary: 2100, increase: true, id: 3, rise: true }
            ],
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // Сравниваем id с data с уникальным идентификатором который приходит нам с аргумента метода
            // const index = data.findIndex(elem => elem.id === id); // Если найдем такое совпадение, то будет индекс
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];

            // Останутся те элементы у которых уникальныый идентификатор не совпадает который пришёл
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }; // Создаём новый объект

        this.setState(({data}) => ({
            data: [...data, newItem]
        }))
    }

    // onToggleProp = (id) => {
    //     this.setState(({data}) => ({
    //         // Возвращаем новый объект со свойством data
    //         data: data.map(item => {
    //             // Если у нас совпали айдишники то мы нашли нужный элемент 
    //             if (item.id === id) {
    //                 return {
    //                     ...item, increase: !item.increase // Возвращаем на данной итерации новый объект с такими данными, в котором increase поменялся на противоположное
    //                 }
    //             }
    //             return item; // Или просто возвращаем объект
    //         })
    //     }));
    // }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }

                return item;
            })
        }));
    }

    // onToggleRise = (id) => {
    //     console.log(`Rise this ${id}`);
    // }

    render() {
        const employee = this.state.data.length;
        const increase = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo 
                    numbersEmployee={employee}
                    increase={increase}
                />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeeList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeeAddForm
                    addItem={this.addItem}
                />
            </div>
        );
    }
}

export default App;