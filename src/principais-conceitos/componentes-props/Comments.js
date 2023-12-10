export function Comment({ author, date, text }) {
    return (
        <div
            className="Comment"
            style={{
                backgroundColor: 'gainsboro',
                border: '5px solid blue',
                textAlign: 'center',
            }}
        >
            <h4>Componente Comment</h4>

            <UserInfo user={author} />

            <div className="Comment-text">
                {text}
            </div>

            <div className="Comment-date">
                {date}
            </div>
        </div>);
}

function UserInfo({ user }) {
    return (
        <div
            className="UserInfo"
            style={{
                backgroundColor: 'gray',
                border: '5px solid yellow',
            }}
        >
            <h4>Componente UserInfo</h4>

            <Avatar user={user} />

            <div className="UserInfo-name">
                {user.name}
            </div>
        </div>
    )
}

function Avatar({ user }) {
    return (
        <div style={{ border: '5px solid blue', backgroundColor: 'lightgreen' }}>
            <h4>Componente Avatar</h4>

            <img
                alt={user.nameAlt}
                className="Avatar"
                src={user.avatarUrl}
                style={{ height: '160px', width: '160px' }}
            />
        </div>
    )
}