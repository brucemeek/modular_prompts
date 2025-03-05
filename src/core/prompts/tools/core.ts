import { executeCommandPrompt } from "./execute_command"
import { readFilePrompt } from "./read_file"
import { writeToFilePrompt } from "./write_to_file"
import { replaceInFilePrompt } from "./replace_in_file"
import { searchFilesPrompt } from "./search_files"
import { listFilesPrompt } from "./list_files"
import { listCodeDefinitionNamesPrompt } from "./list_code_definition_names"

export function getCoreToolsPrompt(cwd: string): string {
	return `
# Tools

${executeCommandPrompt(cwd)}

${readFilePrompt(cwd)}

${writeToFilePrompt(cwd)}

${replaceInFilePrompt(cwd)}

${searchFilesPrompt(cwd)}

${listFilesPrompt(cwd)}

${listCodeDefinitionNamesPrompt(cwd)}
`
}
