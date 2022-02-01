import { Edit, IResourceComponentsProps, useForm } from '@pankod/refine';
// @ts-ignore
import { JsonEditor as Editor } from 'jsoneditor-react';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IPost } from 'interfaces';
import {useEffect, useState} from "react";

export const UserEdit: React.FC<IResourceComponentsProps> = () => {

    const { queryResult, formProps } = useForm<IPost>();
    const [state, setState] = useState<unknown>({});

    useEffect(() => {
        console.log('set', queryResult?.data);
        setState(queryResult?.data);
    }, [queryResult?.data])

    if(queryResult?.isLoading){
        return <div>loading</div>
    }


    return (
        <Edit saveButtonProps={{onClick: () => formProps.onFinish?.(state as {})}}  >
            <Editor
                value={queryResult?.data?.data}
                onChange={(data: unknown) => setState(data)}
            />
        </Edit>
    );
};
