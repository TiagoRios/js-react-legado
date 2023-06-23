export function Comment(props) {
    return (
        <div className="Comment" style={{ textAlign: 'center', border:'5px solid blue', 
        backgroundColor: 'gainsboro'}}>
            <h4>Componente Comment</h4>
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date}
            </div>
        </div>);
}

function UserInfo(props) {
    return (<div className="UserInfo" style={{border:'5px solid yellow', backgroundColor:'white' }}>
        <h4>Componente UserInfo</h4>
        <Avatar user={props.user} />
        <div className="UserInfo-name">
            {props.user.name}
        </div>
    </div>)
}

function Avatar(props) {
    return (
        <div style={{border:'5px solid blue', backgroundColor: 'lightgreen' }}>
            <h4>Componente Avatar</h4>
            <img className="Avatar" style={{ height: '160px', width: '160px' }}
                src={props.user.avatarUrl}
                alt={props.user.nameAlt}
            />
        </div>
    )
}