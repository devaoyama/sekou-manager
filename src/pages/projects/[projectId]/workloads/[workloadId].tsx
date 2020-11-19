import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db, storage } from "../../../../utils/Firebase";
import Auth from "../../../../components/Auth";

const Show = () => {
    const [workload, setWorkload] = useState(null);

    const [image, setImage] = useState(null);

    const router = useRouter();
    const { projectId, workloadId } = router.query;

    useEffect(() => {
        if (!projectId || !workloadId) return;
        db.collection('projects')
            .doc(projectId.toString())
            .collection('workloads')
            .doc(workloadId.toString())
            .get()
            .then(doc => {
                setWorkload(doc.data());
                storage.ref(doc.data().thumbnail).getDownloadURL()
                    .then(url => {
                        setImage(url);
                    })
                ;
            })
        ;
    }, [router.query]);

    return (
        <Auth>
            施工内容ページ
            {(workload && image) && (
                <div>
                    {workload.name}
                    {workload.comment}
                    <img src={image} />
                </div>
            )}
        </Auth>
    )
}

export default Show;
