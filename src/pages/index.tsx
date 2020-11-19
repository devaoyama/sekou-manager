import React from "react";
import Auth from "../components/Auth";
import SignOut from "../components/SignOut";

const Index: React.FC = () => {
    return (
        <Auth>
            <h1>施工管理アプリ</h1>
            <SignOut />
        </Auth>
    );
};

export default Index;
