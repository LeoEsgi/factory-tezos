import { InMemorySigner } from "@taquito/signer";
import { MichelsonMap, TezosToolkit } from "@taquito/taquito";
import factory from "../src/compiled/contract_1.json";
import dotenv from "dotenv";
import path from "path";
// Read environment variables from .env file
dotenv.config({ path: path.join(__dirname, "..", ".env") });

// Initialize RPC connection
const Tezos = new TezosToolkit(process.env.NODE_URL || "");



(async () => {
    const signer = await InMemorySigner.fromSecretKey(
        process.env.ADMIN_SK || ""
    );
    const admin: string = await signer.publicKeyHash();
    Tezos.setProvider({ signer });

    

    async function deploy_contract() {
        const storage = {
            user_map: new MichelsonMap(),
            user_blacklist: [],
            admin_list: new MichelsonMap(),
            has_paid: new MichelsonMap(),
        };
        const op = await Tezos.contract.originate({
            code: factory,
            storage: storage,
        });
        await op.confirmation();
        console.log(`[OK] Contract Factory: ${op.contractAddress}`);
        // check contract storage with CLI
        console.log(
            `tezos-client --endpoint http://localhost:20000 get contract storage for ${op.contractAddress}`
        );
    }

   
    await deploy_contract();

    
   
})();
