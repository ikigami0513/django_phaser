export function getBaseUrl() {
    const { protocol, hostname, port } = window.location;
    const method = protocol.slice(0, -1);
    return `${method}://${hostname}${port ? `:${port}` : ''}`;
}
