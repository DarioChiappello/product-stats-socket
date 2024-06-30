import { ProgressSpinner } from 'primereact/progressspinner';

const LoadingTemplate = () => {

    return (
        <div className="surface-0 text-700 text-center card">
            <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
        </div>
    )
}

export default LoadingTemplate;