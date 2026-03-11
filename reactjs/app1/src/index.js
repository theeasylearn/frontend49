import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
function DisplayState(props) {
    return (<div className="col-lg-3 mb-3">
        <div className="card shadow">
            <div className="card-header bg-primary text-white">
                {props.name}
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Area:</strong> {props.area} km²</li>
                    <li className="list-group-item"><strong>Per Person Income:</strong> {props.income}</li>
                    <li className="list-group-item"><strong>Capital:</strong> {props.capital}</li>
                    <li className="list-group-item"><strong>Language:</strong> {props.language}</li>
                </ul>
            </div>
        </div>
    </div>);
}
function Display() {
    let list = [
        { stateName: "Andhra Pradesh", area_km: 162975, perPersonIncome: 207000, capital: "Amaravati", language: "Telugu" },
        { stateName: "Arunachal Pradesh", area_km: 83743, perPersonIncome: 205000, capital: "Itanagar", language: "English" },
        { stateName: "Assam", area_km: 78438, perPersonIncome: 114000, capital: "Dispur", language: "Assamese" },
        { stateName: "Bihar", area_km: 94163, perPersonIncome: 54000, capital: "Patna", language: "Hindi" },
        { stateName: "Chhattisgarh", area_km: 135192, perPersonIncome: 120000, capital: "Raipur", language: "Hindi" },
        { stateName: "Goa", area_km: 3702, perPersonIncome: 472000, capital: "Panaji", language: "Konkani" },
        { stateName: "Gujarat", area_km: 196024, perPersonIncome: 275000, capital: "Gandhinagar", language: "Gujarati" },
        { stateName: "Haryana", area_km: 44212, perPersonIncome: 296000, capital: "Chandigarh", language: "Hindi" },
        { stateName: "Himachal Pradesh", area_km: 55673, perPersonIncome: 214000, capital: "Shimla", language: "Hindi" },
        { stateName: "Jharkhand", area_km: 79716, perPersonIncome: 92000, capital: "Ranchi", language: "Hindi" },
        { stateName: "Karnataka", area_km: 191791, perPersonIncome: 265000, capital: "Bengaluru", language: "Kannada" },
        { stateName: "Kerala", area_km: 38863, perPersonIncome: 230000, capital: "Thiruvananthapuram", language: "Malayalam" },
        { stateName: "Madhya Pradesh", area_km: 308252, perPersonIncome: 140000, capital: "Bhopal", language: "Hindi" },
        { stateName: "Maharashtra", area_km: 307713, perPersonIncome: 242000, capital: "Mumbai", language: "Marathi" },
        { stateName: "Manipur", area_km: 22327, perPersonIncome: 118000, capital: "Imphal", language: "Manipuri" },
        { stateName: "Meghalaya", area_km: 22429, perPersonIncome: 111000, capital: "Shillong", language: "English" },
        { stateName: "Mizoram", area_km: 21081, perPersonIncome: 198000, capital: "Aizawl", language: "Mizo" },
        { stateName: "Nagaland", area_km: 16579, perPersonIncome: 125000, capital: "Kohima", language: "English" },
        { stateName: "Odisha", area_km: 155707, perPersonIncome: 150000, capital: "Bhubaneswar", language: "Odia" },
        { stateName: "Punjab", area_km: 50362, perPersonIncome: 180000, capital: "Chandigarh", language: "Punjabi" },
        { stateName: "Rajasthan", area_km: 342239, perPersonIncome: 167000, capital: "Jaipur", language: "Hindi" },
        { stateName: "Sikkim", area_km: 7096, perPersonIncome: 463000, capital: "Gangtok", language: "Nepali" },
        { stateName: "Tamil Nadu", area_km: 130058, perPersonIncome: 242000, capital: "Chennai", language: "Tamil" },
        { stateName: "Telangana", area_km: 112077, perPersonIncome: 275000, capital: "Hyderabad", language: "Telugu" },
        { stateName: "Tripura", area_km: 10486, perPersonIncome: 135000, capital: "Agartala", language: "Bengali" },
        { stateName: "Uttar Pradesh", area_km: 240928, perPersonIncome: 95000, capital: "Lucknow", language: "Hindi" },
        { stateName: "Uttarakhand", area_km: 53483, perPersonIncome: 220000, capital: "Dehradun", language: "Hindi" },
        { stateName: "West Bengal", area_km: 88752, perPersonIncome: 141000, capital: "Kolkata", language: "Bengali" }
    ];
    return (<div className="container mt-4">
        <div className="row">
            {list.map((item) => {
                return <DisplayState name={item.stateName} area={item.area_km} capital={item.capital} income={item.perPersonIncome} language={item.language} />
            })}
        </div>
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Display />);
