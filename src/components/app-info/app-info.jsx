import './app-info.css';

const AppInfo = (props) => {

    const { increase, numbersEmployee } = props;

    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {numbersEmployee}</h2>
            <h2>Премию получат: {increase}</h2>
        </div>
    );
}

export default AppInfo;