import { createRef, forwardRef, useImperativeHandle } from 'react';
import { useHistory } from 'react-router-dom';

const History = forwardRef((props, ref) => {
    let history = useHistory();
    useImperativeHandle(ref, () => ({
        push: (url: any) => {
            history?.push(url);
        },
        replace: (url: any) => {
            history?.replace(url);
        },
    }));

    return null;
});

const HistoryRef = createRef();

export { History, HistoryRef };
