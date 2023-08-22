import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";

export const getMessageOfError=(error?:FetchBaseQueryError|SerializedError|null):string|null=>{
    if (error) {
        if ('status' in error) {
            const errMsg = 'data' in error ? String(error.data) : "Error of Request"

            return errMsg||null
        } else {
            return error.message||null;
        }
    }
    return null;
}