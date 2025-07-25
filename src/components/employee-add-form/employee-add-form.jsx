import { Component } from 'react';

import './employee-add-form.css';

class EmployeeAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            error: false
        }
    }

    // Получаем данные когда вводим что-то
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    addItem = (e) => {
        e.preventDefault();
        const { name, salary } = this.state; // Получаем name & salary с стейта

        if (name === '' || salary === '') {
            this.setState({ error: true });
            return;
        }

        this.props.addItem(name, salary); // Данные которые ввели добавляем в пропсы
        this.setState({ name: '', salary: '', error: false}); // Очищаем форму
    }

    render() {
        const { name, salary, error } = this.state;
        const inputClass = error ? "form-control new-post-label error" : "form-control new-post-label";

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.addItem}>
                    <input type="text"
                        className={inputClass}
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className={inputClass}
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }

};

export default EmployeeAddForm;