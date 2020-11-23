import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { db, storage } from "../utils/Firebase";
import { useRouter } from "next/router";

const DeleteProjectListItem = ({ projectId }) => {
    const router = useRouter();

    const handleClick = async () => {
        const confirm = window.confirm('本当に削除しますか？');
        if (!confirm) return;
        const doc = await db.collection('projects').doc(projectId).get();
        await storage.ref(doc.data().thumbnail).delete();
        const result = await storage.ref(doc.data().thumbnail).parent.parent.child(`workloads/${projectId}`).listAll();
        for (const item of result.items) {
            await item.delete();
        }
        await db.collection('projects').doc(projectId).delete();
        await router.push('/');
    };

    return (
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <DeleteIcon />
            </ListItemIcon>
            <ListItemText>
                プロジェクト削除
            </ListItemText>
        </ListItem>
    );
};

export default DeleteProjectListItem;
