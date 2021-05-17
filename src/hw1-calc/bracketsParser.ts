export function isValid(line: string): boolean {
  return (line.match("\\(") || []).length === (line.match("\\)") || []).length;
}

export function isBracketsExist(line: string): boolean {
  return line.includes("(") || line.includes(")");
}

export function getExpression(line: string): string {
  const closeBracketIndex = line.indexOf(")");
  if (closeBracketIndex == -1) {
    return line;
  }
  const openBracketIndex = line.slice(0, closeBracketIndex).lastIndexOf("(");
  return line.slice(openBracketIndex + 1, closeBracketIndex);
}

export function replaceByResult(line: string, result: number): string {
  const closeBracketIndex = line.indexOf(")");
  if (closeBracketIndex == -1) {
    return String(result);
  }
  const openBracketIndex = line.slice(0, closeBracketIndex).lastIndexOf("(");
  return line.replace(
    line.slice(openBracketIndex, closeBracketIndex + 1),
    String(result)
  );
}