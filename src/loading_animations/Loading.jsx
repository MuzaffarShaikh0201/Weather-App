import loading_logo from '../assets/Spinner-1s-104px.svg'

export default function Loading() {
    return (
        <div className="loading-container">
            <img src={loading_logo} alt="Loading..." className='loading-logo'/>
            <div className="loading-text">Loading...</div>
        </div>
    )
}