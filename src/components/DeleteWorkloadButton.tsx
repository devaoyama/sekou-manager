import React from "react";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";
import { db, storage } from "../utils/Firebase";

const DeleteWorkloadButton = ({ thumbnail }) => {
    const router = useRouter();
    const { projectId, workloadId } = router.query;

    const handleClick = async () => {
        const confirm = window.confirm('本当に削除しますか？');
        if (!confirm) return;
        await storage.ref(thumbnail).delete();
        await db.collection('projects')
            .doc(projectId.toString())
            .collection('workloads')
            .doc(workloadId.toString())
            .delete()
        ;
        await router.push('/projects/[projectId]', `/projects/${projectId.toString()}`);
    };

    return (
        <Button color="secondary" onClick={handleClick}>
            削除
        </Button>
    );
};

export default DeleteWorkloadButton;
