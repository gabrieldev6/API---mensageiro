import { isExpressionStatement } from "typescript";
import { User } from "../entities/User";

declare global {
    namespace isExpressionStatement {
        export interface Request {
            user: Partial<User>
        }
    }

}