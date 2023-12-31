import { useState } from "react"

interface IProps{
    word : IWord;
}

export interface IWord{
    day:string;
    eng:string;
    kor:string;
    isDone:boolean;
    id:number;
    like:boolean;
}

export default function VocaWord({word:w}:IProps)
{
    const [word,setWord] = useState(w)
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    const [like, setLike] = useState(word.like);
       

    function toggleShow(){
        setIsShow(!isShow)
    }
    function toggleDone(){
        //setIsDone(!isDone)
        fetch(`http://localhost:3001/words/${word.id}`, {
            method : 'PUT',
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone
            }),
        })
        .then(res=>{
            if(res.ok){
                setIsDone(!isDone);
            }
        });
    }
    function del(){
        if(window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method : 'DELETE', 
            }).then(res=>{
                if(res.ok){
                    setWord({
                        ...word,
                        id:0});
                }
            })
        }
    }
    if(word.id==0){
        return null;
    }

    function toggleLike()
    {
        
        fetch(`http://localhost:3001/words/${word.id}`, {
            method : 'PUT',
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
                ...word,
                like : !like
            }),
        })
        .then(res=>{
            if(res.ok){
                
                setLike(!like);
            }
        });
    }


    return(
        <tr className={isDone? "off" : ""}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}></input>
            </td>
            <td>{word.eng}</td>
            <td>{isShow&&word.kor}</td>
            <td>
                <button onClick={toggleShow}>
                {isShow==true ? "뜻 감추기" : "뜻 보기"}

                </button>
                <button onClick={del} class="btn_del">삭제</button>
                <button className={like? "pink-heart" : "heart"}
                onClick={toggleLike}>♥</button>
            </td>
        </tr>
    )
}