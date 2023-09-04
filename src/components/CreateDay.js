import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch"

export default function CreateDay(){
    const navigate = useNavigate();
    const maxday = 1;
    const days = useFetch("http://localhost:3001/days")
    console.log(days.length);

    function addDay(){
        fetch(`http://localhost:3001/days/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day : days.length +1
            }),
        })
            .then(res => {
                if (res.ok) {
                    alert('생성이 완료 되었습니다.');
                    navigate(`/`)
                }
            });
    }
    
    return <div>
        <h3>현재 일수 : {days.length}</h3>
        <button onClick={addDay}>Day 추가 </button>
    </div>
}