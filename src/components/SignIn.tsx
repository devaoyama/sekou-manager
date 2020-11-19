import React, {useState} from "react";
import { Container, TextField, Button } from "@material-ui/core";
import firebase from "../utils/Firebase";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "./Alert";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(13),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const classes = useStyles();

    const handleClick = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                setError(true);
            })
        ;
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                {error && (
                    <Alert severity="error">
                        ユーザー名またはパスワードが間違っています。
                    </Alert>
                )}
                <TextField
                    type="email"
                    label="メールアドレス"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    type="password"
                    label="パスワード"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button
                    type="button"
                    onClick={handleClick}
                    className={classes.submit}
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    ログイン
                </Button>
            </div>
        </Container>
    );
};

export default SignIn;
