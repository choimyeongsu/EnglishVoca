import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch.ts"

export default function DeleteDay() {
    const navigate = useNavigate();
    const days = useFetch("http://localhost:3001/days");

    function removeDay(day) {
        console.log(day);
       
            fetch(`http://localhost:3001/days/}`, {
                method: 'DELETE',
            }).then(res => {
                if (res.ok) {
                    alert('삭제가 완료 되었습니다')
                    navigate("/")
                }
            })
        
    }

    return (
        <div>
            <h3>현재 일수 : {days.length}</h3>
            {
                days.map(a=>(
                    <button onClick={removeDay}>Day {a.day} 삭제</button>
                ))
            }
           
        </div>
    )
} 