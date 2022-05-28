import { authenticatedLndGrpc } from "lightning";
import { LND_CONFIG } from "./config";

const { lnd } = authenticatedLndGrpc(LND_CONFIG);

export default lnd;