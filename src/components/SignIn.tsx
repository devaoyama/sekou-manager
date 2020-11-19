import React, {useState} from "react";
import firebase from "../utils/Firebase";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleClick = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                setError(true);
            })
        ;
    };

    return (
        <div>
            {error && (
                <p>ユーザー名またはパスワードが間違っています。</p>
            )}
            <label>
                メールアドレス
                <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
            </label>
            <label>
                パスワード
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
            </label>
            <button onClick={handleClick}>ログイン</button>
        </div>
    );
};

export default SignIn;
