import {memo} from 'react';
export const Button = memo(({onClick, label}: {onClick: () => void; label: string}) => {
    console.log(`Rendering Button with label: ${label}`);
    return <button onClick={onClick}>{label}</button>;
});