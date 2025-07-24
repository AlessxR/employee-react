import EmployeeListItem from "../employee-list-item/employee-list-item";
import './employee-list.css';

const EmployeeList = ({ data }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployeeListItem key={id} {...itemProps} />
        )
    }); // Создаём новый элемент каждый раз при переборке

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeeList;