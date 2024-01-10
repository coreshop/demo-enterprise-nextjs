export default function Loader({className="primary"}: {className?: string}) {
    return (
        <div className={`spinner-border text-${className}`} role="status">
        </div>
    );
}