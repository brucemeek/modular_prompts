import { basePrompt } from "./base"
import { capabilitiesPrompt } from "../core_prompts/capabilities"
import { editingPrompt } from "../core_prompts/editing"
import { modesPrompt } from "../core_prompts/modes"
import { objectivePrompt } from "../core_prompts/objective"
import { rulesPrompt } from "../core_prompts/rules"
import { systemInfoPrompt } from "../core_prompts/system_info"
import { serversPrompt } from "../mcp/servers"
import { toolUsePrompt, toolExamples } from "../tools/tool_use"
import { creationPrompt } from "../mcp/creation"
import { getCoreToolsPrompt } from "../tools/core"
import { browserActionPrompt } from "../tools/browser_action"
import { useMcpToolPrompt } from "../mcp/tools/use_mcp_tool"
import { accessMcpResourcePrompt } from "../mcp/tools/access_mcp_resource"
import { McpHub } from "../../../services/mcp/McpHub"
import { BrowserSettings } from "../../../shared/BrowserSettings"

export const SYSTEM_PROMPT = async (
	cwd: string,
	supportsComputerUse: boolean,
	mcpHub: McpHub,
	browserSettings: BrowserSettings,
) => `${basePrompt()}

${toolUsePrompt()}

${getCoreToolsPrompt(cwd)}${supportsComputerUse ? `\n${browserActionPrompt(browserSettings)}` : ""}${
	mcpHub.getMode() !== "off" ? `\n${useMcpToolPrompt()}\n\n${accessMcpResourcePrompt()}` : ""
}

${toolExamples()}

${mcpHub.getMode() !== "off" ? serversPrompt(mcpHub) : ""}

${editingPrompt()}

${modesPrompt()}

${capabilitiesPrompt(cwd, supportsComputerUse, browserSettings)}

${rulesPrompt(cwd, supportsComputerUse, mcpHub)}

${systemInfoPrompt(cwd)}`
