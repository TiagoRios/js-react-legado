export default function Details({ summary, children }) {
    return (
        <details>
            <summary style={{ fontSize: "1.5rem" }}>
                {summary}
            </summary>

            {children}
        </details>
    )
}