import { SYSTEM_PROMPT } from "../prompts/foundation/system"
import { addUserInstructions } from "../prompts/foundation/user_instructions"
import { formatResponse } from "./foundation/responses"
import { BrowserSettings } from "../../shared/BrowserSettings" // Adjust path as needed
import { McpHub } from "../../services/mcp/McpHub" // Adjust path as needed

export { SYSTEM_PROMPT, addUserInstructions, formatResponse }

// Example usage (optional, adjust as per your setup):
// const prompt = await SYSTEM_PROMPT("/path/to/cwd", true, new McpHub(), { viewport: { width: 1280, height: 720 } });
// console.log(prompt);
// console.log(formatResponse.toolDenied());
