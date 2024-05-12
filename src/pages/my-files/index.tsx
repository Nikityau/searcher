import React from 'react';
import StackGrid from "react-stack-grid";

import './style.scss'
import Media from "../../components/media";
import {myFileData} from "./data";

const MyFiles = () => {

    const [files, setFiles] = React.useState(myFileData);

    return (
        <div className={'my-files'}>
            <h2>Мои файлы:</h2>
            <div className={'my-files__list'}>
                <StackGrid
                    columnWidth={150}
                >
                    {
                        files.map(m => (
                            <Media
                                key={m.id}
                                id={m.id}
                                type={m.type}
                                url={m.url}
                                license={''}
                                preview={m.preview}
                                title={m.title}
                                date={new Date().toDateString()}
                            />
                        ))
                    }
                </StackGrid>
            </div>
        </div>
    );
};

export default MyFiles;