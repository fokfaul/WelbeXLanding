import React, {useState, useEffect} from 'react';
import './Phone.css';

let Counter = 0;
export const Phone = ({value}) => {
    const [phone, setPhone] = useState("");
    useEffect(() => {
        Counter++;
        console.log({Counter});
        return () => {
            Counter--;
            console.log({Counter});
        }
    }, [])
    const handlePhone = (value) => {
        const number = value.replace(/\D/g, '').replace(/^7/, '');
        if (number.length === 0)
            setPhone("");
        else {
            if (number.length <= 3)
                setPhone("+7 (" + number);
            else if (number.length <= 6)
                setPhone("+7 " + number.replace(new RegExp(`(^\\d{3})(\\d{1,3}$)`), '($1) $2'));
            else if (number.length <= 8)
                setPhone("+7 " + number.replace(new RegExp(`(^\\d{3})(\\d{3})(\\d{1,2}$)`), '($1) $2-$3'));
            else if (number.length <= 10)
                setPhone("+7 " + number.replace(new RegExp(`(^\\d{3})(\\d{3})(\\d{2})(\\d{1,2}$)`), '($1) $2-$3-$4'));
        }
    };
    return (
        <form className="phone">
            <label htmlFor={"phone" + Counter}>Ваш номер телефона</label>
            <input type="text" id={"phone" + Counter} placeholder="+7 (___) ___-__-__" value={phone}
                   onChange={(e) => handlePhone(e.target.value)}/>
            <input type="submit" className="btn" value={value}/>
            <p>Нажимая «{value}», я даю согласие на <a href="#">обработку персональных данных</a></p>
        </form>
    );
};