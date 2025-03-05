import os from "os"
import osName from "os-name"
import { getShell } from "../../../utils/shell"

export const systemInfoPrompt = (cwd: string) => `
====

SYSTEM INFORMATION

Operating System: ${osName()}
Default Shell: ${getShell()}
Home Directory: ${os.homedir().toPosix()}
Current Working Directory: ${cwd.toPosix()}`
