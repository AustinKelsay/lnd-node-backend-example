export const LND_CONFIG = {
    socket: process.env.LND_GRPC_HOST,
    cert: process.env.LND_TLS_CERT,
    macaroon: process.env.LND_MACAROON
}